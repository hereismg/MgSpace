const collection = document.querySelector(".collection")
const blogList = collection.querySelector(".list").querySelectorAll(".item")
const blogsNameList = [
    "AI还需要理论吗？",
    "价值论、无价值论和反价值论",
    "人生难道就只是一场赛跑？",
    "清晰的思维障碍",
    "从高考作文到AI与学习",
]

for (let i=0; i<blogsNameList.length; i++){
    blogList[i].onclick = function (){
        window.location.href = `../blogs/${blogsNameList[i]}.html`
    }
}
