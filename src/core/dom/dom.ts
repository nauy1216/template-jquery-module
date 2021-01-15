// import { isSVG, objectToStyleString } from './utils'
import context from '../../index'

// 当前组件id
let cid = 0
// 注册事件队列
let queue:Array<Function> = []
// 为加入dom树子组件
let childNodes:Array<any> = []

let pending = false
function flush() {
  if (pending) {
    return
  } 
  pending = true

  setTimeout(() => {
    task()
    if (childNodes.length) {
      setTimeout(task,0)
    } else {
      console.timeEnd('test')
      pending = false
    }
  },0)
}

function task() {
  for(let i = 0; i < childNodes.length; i = i+2) {
    try {
      let placeholder =  document.querySelector(`[${childNodes[i]}]`)
      let child = childNodes[i + 1]
      if (placeholder && placeholder.parentNode) {
        placeholder.parentNode.replaceChild(child, placeholder)
        childNodes.splice(i, 2)
        i -= 2
      }
    } catch(e) {
      console.log('error in task: ', e)
    }
  }
}

function appendChild(html: string, children: Array<any>) {
  // children &&  children.forEach(child => {
  //   if (child.nodeType == 1) {
  //     let placeholder = `componnet-placeholder-${childNodes.length}`
  //     html += `<div ${placeholder}></div>`
  //     childNodes.push(placeholder)
  //     childNodes.push(child)
  //     flush()
  //   } else {
  //     html += Array.isArray(child)? child.join(''): child
  //   }
  // })
  // return html

  children &&  children.forEach(child => {
    if (child.nodeType == 1) {
      let placeholder = `componnet-placeholder-${childNodes.length}`
      html += `<div ${placeholder}></div>`
      childNodes.push(placeholder)
      childNodes.push(child)
      flush()
    } else {
      if (Array.isArray(child)) {
        html = appendChild(html, child)
      } else {
        html += child
      }
    }
  })

  return html
}


function dom(tag: any, attrs: any, ...children: any[]) {
  // console.error(tag, attrs, children)
  if (typeof tag === 'function') {
    const result = tag(Object.assign({}, attrs, { children }))
    // return result === 'FRAGMENT' ? children : result
    if (result === 'FRAGMENT') {
      return children
    } else {
      return (function() {
        let div = document.createElement('div')
        div.innerHTML = result
        let current = null
        while(queue.length > 0) {
          current = queue.pop()
          if (current) {
            current(div)
          }
        }
        current = null
        return div.children[0]
      })()
    }
  }
  if (typeof tag === 'string') {
    let html = ''
    html += `<${tag}`
    attrs && Object.keys(attrs).forEach(key => {
        if (/^on/.test(key)) {
            let handleId = `date-handler-${cid++}`
            html += `  ${handleId}`
            ;(function(handleId, key, handler){
              queue.push((parent:any) => {
                let eventName = key.slice(2).toLowerCase()
                let dom = parent.querySelector(`[${handleId}]`)
                if (dom) {
                  dom.addEventListener(eventName, handler)
                }
              })
            })(handleId, key, attrs[key])
        } else {
            html += ` ${key}="${attrs[key]}"`
        }
    })
    html +='>'
    html = appendChild(html, children)
    html +=`</${tag}>`
    return html
  }

  throw new Error(`does not handle ${typeof tag}`)
}


export default dom
export const Fragment = () => 'FRAGMENT'
