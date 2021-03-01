import HiComponent from '../lib/HiComponent.js'
const {dom, Fragment} = HiComponent

// function Child(props) {
//     return (
//         <div class="child">
//             <h1 style="color: red">{props.title}</h1>
//             <form class="navbar-form" role="search">
//                 <div class="form-group">
//                     <input type="text" class="form-control" placeholder="Search"></input>
//                 </div>
//                 <button type="submit" class="btn btn-default">Submit</button>
//             </form>
//             <nav aria-label="Page navigation">
//             <ul class="pagination">
//                 <li>
//                 <a href="#" aria-label="Previous">
//                     <span aria-hidden="true">&laquo;</span>
//                 </a>
//                 </li>
//                 <li><a href="#">1</a></li>
//                 <li><a href="#">2</a></li>
//                 <li><a href="#">3</a></li>
//                 <li><a href="#">4</a></li>
//                 <li><a href="#">5</a></li>
//                 <li>
//                 <a href="#" aria-label="Next">
//                     <span aria-hidden="true">&raquo;</span>
//                 </a>
//                 </li>
//             </ul>
//             </nav>
//         </div>
//     )
// }

function handleClick(data) {
    console.log('click', data)
}
function Text(props) {
    return (
        <div class="Text" onClick={() => {handleClick(props.index)}}>{props.text}</div>
    )
}
function App() {
    let list = new Array(30).join('1').split('')
    let child = list.map((_, index) => (<Text index={index} text={"hello --> " + index}></Text>))
    return (
        <div class="App">
            {child}
        </div>
    )
}  

console.time('test')
debugger
let Context = new HiComponent()

let app = App()
Context.render(app, '#app')
