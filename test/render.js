import html2ast from './html2ast.js'
class Component {
    constructor(html, wrapDom) {
        this.html = html
        this.wrapDom = wrapDom
        if (!this.wrapDom.__htmlcomponent__) {
            this.dom = null
            this.ast = null
            this.oldast = null
            this.wrapDom.__htmlcomponent__ = this
        }
        this._patch(this.html)
    }

    _patch(html) {
        this.ast = html2ast(html) 
        if (!this.oldast) {
            this.dom = createElement(this.ast)
            this.wrapDom.appendChild(this.dom)
        } else {
            patch(this.oldast, this.ast, this.wrapDom)
        }
        this.oldast = this.ast
        this.ast = null
    }
}

export function render(html, domId) {
    // let wrapDom = document.getElementById(domId)
    // if (wrapDom.__htmlcomponent__ instanceof Component) {
    //     wrapDom.__htmlcomponent__._patch(html)
    // } else {    
    //     new Component(html, wrapDom)
    // }
    document.getElementById(domId).innerHTML = html
}

export function patch(oldast, ast, wrapDom) {
    if (ast.tag != oldast.tag) {
        let componentdom = createElement(ast)
        wrapDom.innerHTML = ''
        wrapDom.appendChild(componentdom)
    } else {
        ast.attrs.forEach(attr => {
            oldast.__dom__.setAttribute(attr.name, attr.value)
        })
        let childs = []

        oldast.__dom__.innerHTML = ''
        if (ast.children.length) {
            childs = createElements(ast.children)
            childs.forEach(child => {
                oldast.__dom__.appendChild(child)
            })
        }

        ast.__dom__ = oldast.__dom__
    }
}

export function createElements(eles) {
    if (!(eles instanceof Array)) {
        eles = [eles]
    }
    return eles.map(ele => {
        return createElement(ele)
    })
}

export function createElement(ele) {
    if (typeof ele == 'string') {
        return document.createTextNode(ele)
    } else {
        let eleDom = document.createElement(ele.tag)
        ele.attrs.forEach(attr => {
            eleDom.setAttribute(attr.name, attr.value)
        })
        ele.children.forEach(child => {
            eleDom.appendChild(createElement(child))
        })
        ele.__dom__ = eleDom
        return eleDom
    }
}
