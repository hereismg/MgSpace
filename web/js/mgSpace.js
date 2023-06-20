let mgSpace = document.querySelector(".mgSpace")
let main = document.querySelector(".main")
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
    background.style.backgroundImage = `url(res/${bg_list[bg_pointer]})`
}
hello_right.onclick = function (){
    bg_pointer = (bg_pointer+1) % bg_list.length
    background.style.backgroundImage = `url(res/${bg_list[bg_pointer]})`
}
// setInterval(hello_left.onclick, 5000)    // 每隔五秒切换图片

let article = mgSpace.querySelector(".article")
let contentList = article.querySelector(".content").querySelectorAll("li")
let textList = article.querySelector(".text").querySelectorAll("div")

for (let i=0; i<contentList.length; i++){
    contentList[i].onmouseenter = function (){
        if (i>=textList.length)return
        contentList[i].classList = "this"
        textList[i].classList = "this"
        for (let j=0; j<contentList.length; j++){
            if (j!==i){
                contentList[j].classList = ""
                textList[j].classList = ""
            }
        }
    }
}
let contentPointer = 0
setInterval(function(){
    if (contentPointer>=textList.length)contentPointer=0;
    contentList[contentPointer].onmouseenter(null)
    contentPointer++
}, 5000)


const cardList = main.querySelector(".circulating").querySelectorAll(".card")
for (let i=0; i<cardList.length; i++){
    cardList[i].onclick = function (){
        window.location.href = "web/html/collection/collection.html"
    }
}

leaveWordList =[
    "这是第一段留言。",
    "这是第二段留言。",
    "这是第三段留言。",
    "这是第亖段留言。",
]

const wall = document.querySelector(".wall")

function sendBiu(biuText){
    let biu = document.createElement("div")     // 创建一条弹幕
    biu.innerText = biuText
    biu.style.transition = "1000ms"
    biu.style.positio
    wall.appendChild(biu)
}