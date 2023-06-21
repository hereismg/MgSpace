// 设置内容隐藏
let chapter = document.querySelectorAll(".chapter");
let main = document.querySelector(".main");
let outline = document.querySelector(".outline");
let outlineLine = outline.querySelector(".line");
let outlineText = outline.querySelector(".text");
let outline_status = 1;

console.log(chapter)

for (let i=0; i<chapter.length; i++){
    let title = chapter[i].querySelector(".title");
    if (title === null) continue

    title.onclick = function (){
        let text = chapter[i].querySelector(".text");
        if (text.style.display === "none"){
            text.style.display = "block";
        }else{
            text.style.display = "none";
        }
    }

    let newTitle = document.createElement('div')
    newTitle.innerHTML = title.innerHTML
    newTitle.className = "item"
    outlineText.appendChild(newTitle)

    newTitle.onclick = function (){
        chapter[i].scrollIntoView({behavior:"smooth"});
    }
}

let list = outline.querySelectorAll(".item");

outlineLine.onclick = function (){
    if (outline_status === 1){
        outline_status = 0;
        outline.style.transform = "translate(0, 850px)";
    }else{
        outline_status = 1;
        outline.style.transform = "translate(0, 0)";
    }
}

// 设置导航栏
function setOutlinePos_atTop(){
    outline.style.top = main.getBoundingClientRect().top.toString() + "px";
}

function setOutlinePos_atBottom(){
    let pos = main.getBoundingClientRect();
    if (pos.top <= 0){
        outline.style.top = "10%";
    }else{
        setOutlinePos_atTop();
    }
}

function setOutlineCurrentChapter(){
    for (let i=0; i<chapter.length; i++){
        let pos = chapter[i].getBoundingClientRect();
        if (pos.top <= 0 && pos.bottom >= 0){
            list[i].className = "current-chapter"
            for (let j=0; j<list.length; j++){
                if (j !== i){
                    list[j].className = "item";
                }
            }
        }
    }
}

window.addEventListener('resize', setOutlinePos_atTop);

window.addEventListener('scroll', function (){
    setOutlineCurrentChapter();
    setOutlinePos_atBottom();
});

setOutlinePos_atTop();
list[0].className = "current-chapter"

