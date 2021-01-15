const {html2ast} = require('../html2ast')


let htmlStr = `
<div id="hello" vbind_value="1+1">
    测试
    <div class="hello">hello</div>
    <span></span>
    <img src="aaa" />
</div>
`

let ast = html2ast(htmlStr)
console.log('ast', JSON.stringify(ast, null, 2))