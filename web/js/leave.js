function dataToString(date){
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDay()
    let hours = date.getHours()
    let min = date.getMinutes()
    return `${year}-${month}-${day} ${hours}:${min}`
}

function like(element){
    let num = element.getElementsByTagName("span")[0]
    num.innerText = (parseInt(num.innerText)+1).toString()
}



class LeaveLeaf{
    constructor(user, email, text, date=new Date(), thumbs_up=0) {
        this.element = document.createElement("div")
        this.element.className = "leaf"
        this.element.innerHTML = `
            <div class="head">
                <div class="name">${user}</div>
                <div class="email">${email}</div>
            </div>
            <div class="text">${text}</div>
            <div class="tail">
                <div class="date">${dataToString(date)}</div>
                <div class="thumbs-up" onclick="like(this)"><img src="../../res/点赞.svg" alt="" width="18px"><span>${thumbs_up}</span></div>
            </div>`

        this.user = this.element.querySelector(".name")
        this.email = this.element.querySelector(".email")
        this.text = this.element.querySelector(".text")
        this.date = this.element.querySelector(".date")
        this.thumbs_up = this.element.querySelector(".thumbs-up")
    }
}

class LeaveBranch{
    constructor(root) {
        const replay_window = document.createElement("div")
        replay_window.className = "replay-window"
        replay_window.innerHTML = `
                <div class="head">
                    <label>昵称：<input type="text" name="replay_user"></label>
                    <label>邮箱：<input type="text" name="replay_email"></label>
                    <button onclick="submitReplay(this)">提交</button>
                </div>
                <label>
                    <textarea name="replay_text"></textarea>
                </label>`

        const replay_btn = document.createElement("div")

        replay_btn.className = "replay-btn"
        replay_btn.innerText = "回复"
        replay_btn.onclick = function (){
            hide(this, tree.tree.length)
            console.log(1)
        }

        root.element.querySelector(".tail").appendChild(replay_btn)
        root.element.appendChild(replay_window)
        this.element = root.element
        this.element.className = "branch"

        this.repalys = []
    }

    append(leaf){
        if (this.repalys.length===0){
            this.replay = document.createElement("div")
            this.replay.className = "replay"
            this.element.append(this.replay)
        }
        this.replay.appendChild(leaf.element)
        this.repalys.push(leaf)
    }
}

class LeaveTree{
    constructor(element) {
        this.element = element
        this.tree = []
    }

    append(branch){
        branch.element.setAttribute("number", this.tree.length)
        this.element.appendChild(branch.element)
        this.tree.push(branch)
    }
}

// let root = new LeaveLeaf("墨格", "hereismg@163.com", "今天中午吃什么？")
// let leaf1 = new LeaveLeaf("无邪", "wuxeic@163.com", "一条留言")
// let leaf2 = new LeaveLeaf("无邪", "wuxeic@163.com", "一条留言")
// const branch = new LeaveBranch(root)
// branch.append(leaf1)
// branch.append(leaf2)

const tree = new LeaveTree(document.querySelector(".tree"))
const firstBranch = new LeaveBranch(new LeaveLeaf("墨格", "hersismg@163.com", "欢迎大家给我留言！"))
tree.append(firstBranch)

const branch_creater = document.querySelector("#branch_creater")
const submit_user = branch_creater.querySelector("input[name='submit_user']")
const submit_email = branch_creater.querySelector("input[name='submit_email']")
const submit_text = branch_creater.querySelector("textarea[name='submit_text']")

function submitBranch(){
    if (submit_user.value===""){
        window.alert("用户名不能为空！")
        return
    }else if (submit_email.value===""){
        window.alert("邮箱不能为空！")
        return
    }else if (submit_text.value===""){
        window.alert("您还没有填写任何内容！")
        return
    }
    const leaf = new LeaveLeaf(submit_user.value, submit_email.value, submit_text.value)
    const branch = new LeaveBranch(leaf)
    tree.append(branch)
}

function submitReplay(element){
    const replay_window = element.parentNode.parentNode
    const replay_user = replay_window.querySelector("input[name='replay_user']")
    const replay_email = replay_window.querySelector("input[name='replay_email']")
    const replay_text = replay_window.querySelector("textarea[name='replay_text']")

    if (replay_user.value===""){
        window.alert("用户名不能为空！")
        return
    }else if (replay_email.value===""){
        window.alert("邮箱不能为空！")
        return
    }else if (replay_text.value===""){
        window.alert("您还没有填写任何内容！")
        return
    }

    const leaf = new LeaveLeaf(replay_user.value, replay_email.value, replay_text.value)
    const number = replay_window.parentNode.getAttribute("number")
    const branch = tree.tree[number].append(leaf)
}

function hide(element, num){
    const replay_window = element.parentNode.parentNode.querySelector(".replay-window")
    if (element.classList.toggle("hide")){
        replay_window.style.display = "flex"
    }else{
        replay_window.style.display = "none"
    }
    console.log(2)
}