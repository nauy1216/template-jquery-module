// const jsxRender2String = require('preact-render-to-string')
const babylon = require('babylon')
const generate = require('babel-generator')

module.exports = function loader(source) {
    // console.log(source)
    // debugger
    // const code = `function square(n) {
    //     return n * n;
    //   }`;
      
    //   try {
    //     const ast = babylon.parse(source)

    //   } catch(e) {
    //       console.log('error', e)
    //   }

    // console.log(ast, 'ast')
    // debugger
    return source
}