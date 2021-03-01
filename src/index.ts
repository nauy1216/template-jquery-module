import EventEmitter from './core/events'
import {render} from './core/render'
import {Context} from './core/context'
import {IHiComponent} from './types/index'
import dom, {Fragment}from './core/dom/dom'


export default function HiComponent(this: IHiComponent): IHiComponent {
    console.log('constructor6666')
    this.context  = new Context()
    this.eventBus = new EventEmitter()
    this._init()
    return this
}



let cid = 0
let target = null
HiComponent.prototype = {
    constructor: HiComponent,
    render,
    _init(this: IHiComponent) {
        this.eventBus.on('context:mounted', (data: any) => {
            console.log('context:mounted', data)
            // this._flush()
            let component = Object.create(null)
            component.parent = data.parent
            this.context.components[cid++] = component
        })
    },
    _flush() {
        
    }
}

HiComponent.EventEmitter = EventEmitter
HiComponent.dom = dom
HiComponent.Fragment = Fragment



 