const http = require("http")
const server = http.createServer()

server.on("request", (req, res)=>{
    if (req.url === "/A-blog.html"){
        res.end("<h1>标题！</h1>>")
        console.log("A-blog.html");
    }
})

server.listen(80, ()=>{
    console.log("run!")
})