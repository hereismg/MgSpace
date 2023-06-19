let mgSpace = document.querySelector(".mgSpace")
let hello = mgSpace.querySelector(".hello")
let background = mgSpace.querySelector(".background")

function setMgSpaceSize(){
    hello.style.height = window.innerHeight.toString()+"px"
    hello.style.width = window.innerWidth.toString()+"px"
    background.style.height = window.innerHeight.toString()+"px"
    background.style.width = window.innerWidth.toString()+"px"
}
window.addEventListener('resize', setMgSpaceSize)
setMgSpaceSize()

let bg_list = [
    "forest-highway.jpg",
    "road.jpg",
    "flower.jpg"
]
let bg_pointer = 0
let hello_left = hello.querySelector(".left")
let hello_right = hello.querySelector(".right")
hello_left.onclick = function (){
    if (bg_pointer-1>=0){
        bg_pointer = (bg_pointer-1) % bg_list.length
    }else{
        bg_pointer = bg_list.length-1;
    }
    background.style.backgroundImage = `url(../../res/${bg_list[bg_pointer]})`
}
hello_right.onclick = function (){
    bg_pointer = (bg_pointer+1) % bg_list.length
    background.style.backgroundImage = `url(../../res/${bg_list[bg_pointer]})`
}
// setInterval(hello_left.onclick, 5000)