import {Context} from '../core/context'
import EventEmitter from '../core/events'

export interface IHiComponent {
    context: Context,
    eventBus: EventEmitter,
    _init: () => void,
    _flush: () => void
}

// export abstract  class IHiComponent {
//     public static target: Object
//     context: Context
//     eventBus: EventEmitter
//     _init: () => void
//     _flush: () => void
// }