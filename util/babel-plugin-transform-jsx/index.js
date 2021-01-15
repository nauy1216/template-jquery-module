const jsxsyntax = require("@babel/plugin-syntax-jsx")
const generator = require('babel-generator').default
module.exports = function (babel) {
  const { types, template } = babel

  function transformCode(node) {
    let code = ''
    if (node.type == 'JSXElement') { // 节点
      let tagName = node.openingElement.name.name
      if (/^[A-Z]/.test(tagName)) { // 自定义组件
        let attributes = node.openingElement.attributes
        if (attributes) {
          let propsVar = ''
          for (attr of attributes) {
            if (attr.name.name == 'props') {
              propsVar = attr.value.expression.name
              break
            }
          }
          code += `' + ${tagName}(${propsVar}) + '`
        }
      } else {
        code += `<${tagName} ${getAttrs(node)}>`
        if (node.children) {
          node.children.forEach(child => {
            code += transformCode(child)
          })
        }
        code += `</${tagName}>`
      }
    } else if (node.type == 'JSXText') { // text
        code += node.value.replace(/^[\n\r\s]*|[\n\r\s]*$/g, '')
    } else if (node.type == 'JSXExpressionContainer') { // expression {}
      if (node.expression.type == 'Identifier') {
        code += `' + ${node.expression.name} + '`
      } else if (node.expression.type == 'CallExpression') { // 执行语句 console.log()
        code +=  `' + (function(){ return [...${generator(node.expression, {}).code}]}).call(this).join("") + '`
      } else if (node.expression.type == 'MemberExpression') {
        code += `' + ${generator(node.expression, {}).code} + '`
      }
    }
    return code
  }

  function getAttrs(node) {
    let attrs = ''
    let key = ''
    let val = ''
    let attributes = node.openingElement.attributes || []
    attributes.forEach(attr => {
      key = attr.name.name
      val = attr.value.value
      val = /^{/.test(val)? `' + ${val} + '`: val
      attrs += `${key}="${val}" `
      if ('define-dom' == key) {
        isdefinedom = true
      }
    })
    return attrs
  }

  let isdefinedom = false
  const visitor = {
      Program:{
        exit(path, file) {
          console.log('Program exit...')
        },        
        enter() {
          console.log("Program Entered!");
        },
        exit() {
          console.log("Program Exited!");
        }
      },
      JSXElement:{
        enter(path, file) {
          isdefinedom = false
          let code = transformCode(path.node)
          if (isdefinedom) {
            path.replaceWithSourceString("(function () { let f = document.createElement('div'); f.innerHTML = '"+ code + "'; return f.children[0] })()")
          } else {
            path.replaceWithSourceString("'"+ code + "'")
          }
          // path.replaceWithSourceString(code)
          console.log("JSXElement Entered!");
        },
        exit() {
          console.log("JSXElement Exited!");
        }
      },
      // JSXExpressionContainer:{
      //   enter(path, file) {
      //     debugger
      //     console.log("JSXExpressionContainer enter!")
      //   },
      //   exit() {
      //     console.log("JSXExpressionContainer Exited!");
      //   }
      // },
      // JSXAttribute:{
      //   exit(path, file) {
      //     console.log('JSXElement exit...')
      //   },        
      //   enter() {
      //     console.log("JSXAttribute Entered!");
      //   },
      //   exit() {
      //     console.log("JSXAttribute Exited!");
      //   }
      // },
      // JSXFragment:{
      //   exit(path, file) {
      //     console.log('JSXFragment exit...')
      //   },        
      //   enter() {
      //     console.log("JSXFragment Entered!");
      //   },
      //   exit() {
      //     console.log("JSXFragment Exited!");
      //   }
      // },
      // JSXNamespacedName:{
      //   exit(path, file) {
      //     console.log('JSXNamespacedName exit...')
      //   },        
      //   enter() {
      //     console.log("JSXNamespacedName Entered!");
      //   },
      //   exit() {
      //     console.log("JSXNamespacedName Exited!");
      //   }
      // },
      // JSXSpreadChild:{
      //   exit(path, file) {
      //     console.log('JSXSpreadChild exit...')
      //   },        
      //   enter() {
      //     console.log("JSXSpreadChild Entered!");
      //   },
      //   exit() {
      //     console.log("JSXSpreadChild Exited!");
      //   }
      // },
  };

  return {
      name: "transform-react-jsx",
      inherits: jsxsyntax.default,
      visitor
  }
}