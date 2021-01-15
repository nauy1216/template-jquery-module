/**
 * 
 * @param {any} list 
 * @param {number} start 
 */
export function toArray (list: any, start?: number) {
    start = start || 0
    let i = list.length - start
    const ret = new Array(i)
    while (i--) {
      ret[i] = list[i + start]
    }
    return ret
}

export function async(cb: Function, context: any, ...args: any[]) {
  setTimeout(() => {
      cb.call(context, ...args)
  }, 0)
}
  