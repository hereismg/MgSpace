let bar = document.querySelector(".bar");
let ball = bar.querySelector(".ball");
let left = bar.querySelector(".left");
let right = bar.querySelector(".right");

ball.onclick = function (){
    if (ball.classList.toggle("hide")){
        left.style.transform = "translate(50px, 0)"
        left.style.opacity = "0"
        right.style.transform = "translate(-50px, 0)"
        right.style.opacity = "0"
        ball.style.transform = "scale(50%) translate(0, 100px)";
        let timer = setTimeout(function () {
            left.style.display = "none";
            right.style.display = "none";
        }, 200);
    }else{
        left.style.display = "flex";
        right.style.display = "flex";
        let timer =  setTimeout(function (){
            left.style.transform = "translate(0, 0)"
            left.style.opacity = "1"
            right.style.transform = "translate(0, 0)"
            right.style.opacity = "1"
            ball.style.transform = "scale(100%)";
        }, 10);
    }
}

function linkToMgSpace(){
    window.location.href = "../../../index.html"
}

function linkTo(url){
    window.location.href = url
}
