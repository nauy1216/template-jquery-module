/**
 * 
 */
import {async} from './util'
import {IHiComponent} from '../types/index'
export function render(this:IHiComponent, html: string | HTMLElement, wrap: string) {
    async(_render, this, html, wrap)
}

function _render(this:IHiComponent, html: string | HTMLElement, wrap: string) {
    let parent = document.querySelector(wrap)
    if (!parent) {
        throw new Error('wrap 不存在')
    }

    if (typeof html == 'string') {
        parent.innerHTML = html
    } else {
        parent.innerHTML = ''
        parent.appendChild(html)
    }
    this.eventBus.emit('context:mounted', {
        parent
    })
}

