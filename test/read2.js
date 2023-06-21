const http = require("http");
const server = http.createServer();

server.on("request", (req, res)=>{
    let context = "<h1>404 Not found!</h1>";
    res.end(context);
})

server.listen(80, ()=>{
    console.log("run!");
})