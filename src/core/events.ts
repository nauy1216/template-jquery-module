import {toArray} from './util'

interface Events {
  [key:string]: Array<any> | null
}

export default class EventEmitter {
    private _events: Events
    constructor() {
      this._events = Object.create(null)
    }
    
    /**
     * 
     * @param {string | Array<string>} event 
     * @param {Function} fn 
     */
    on(event: string | Array<string>, fn: Function) {
        const vm = this
        if (Array.isArray(event)) {
            for (let i = 0, l = event.length; i < l; i++) {
                vm.on(event[i], fn)
            }
        } else {
            (vm._events[event] || (vm._events[event] = [])).push(fn)
        }
        return vm
    }

    /**
     * 
     * @param {string} event 
     * @param {Function} fn 
     */
    once(event: string, fn: Function) {
        const vm = this
        function on () {
            vm.off(event, on)
            fn.apply(vm, arguments)
        }
        on.fn = fn
        vm.on(event, on)
        return vm
    }

    /**
     * 
     * @param {string | Array<string>} event 
     * @param {Function} fn 
     */
    off(event?: string | Array<string>, fn?:Function) {
        const vm = this
        // all
        if (event == undefined) {
          vm._events = Object.create(null)
          return vm
        }
        // array of events
        if (Array.isArray(event)) {
          for (let i = 0, l = event.length; i < l; i++) {
            vm.off(event[i], fn)
          }
          return vm
        }
        // specific event
        const cbs = vm._events[event]
        if (!cbs) {
          return vm
        }
        if (!fn) {
          vm._events[event] = null
          return vm
        }
        // specific handler
        let cb
        let i = cbs.length
        while (i--) {
          cb = cbs[i]
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1)
            break
          }
        }
        return vm
    }

    /**
     * 
     * @param {string} event 
     */
    emit(event: string, ...args: any[]) {
        const vm = this
        let cbs = vm._events[event]
        if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs
          const args = toArray(arguments, 1)
          let handler
          for (let i = 0, l = cbs.length; i < l; i++) {
            try {
              handler = cbs[i]
              args ? handler.apply(null, args) : handler.call(null)
            } catch (e) {
                console.error(`event handler for "${event}"`)
                console.error(e)
            }
          }
        }
        return vm
    }
}