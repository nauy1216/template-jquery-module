import HTMLParser from './htmlParser'

export default function(htmlStr) {
    let elements = []
    let ast = []
    HTMLParser(htmlStr, {
        // unary 是否是闭标签
        start: function(tag, attrs, unary) {
            // debugger
            console.log('start', tag, attrs, unary)
            let element = {
                tag: tag,
                attrs: attrs,
                children: [],
                // parent: null
            }
            if (elements.length) {
                let last = elements[elements.length - 1]
                last.children.push(element)
                // element.parent = last
                if (!unary) {
                    elements.push(element)
                }
            } else {
                // 根节点
                ast.push(element)
                elements.push(element)
            }
        },
        end: function(tag) {
            console.log('end', tag)
            if (tag == elements[elements.length - 1].tag) {
                elements.pop()
            }
        },
        chars: function(text) {
            console.log('chars', text)
            let last = elements[elements.length - 1]
            if (last && text.replace(/^\s*|\s*$/g,'')) {
                last.children.push(text.replace(/^\s*|\s*$/g,''))
            }
        },
        comment: function(text) {}
    })    
    return ast[0]
}

