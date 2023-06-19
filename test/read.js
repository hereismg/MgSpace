const fs = require("fs");

const http = require('http')
const server = http.createServer()

server.on('request', (req, res)=>{
    const url = req.url;
    const method = req.method;
    let str = `“${url} + ${method}”`;

    fs.readFile("../html/A-blog.html", (err, data)=>{
        if (err){
            console.error(err);
            return
        }
        console.log(1)
        console.log(data.toString())
        str = data.toString();
    })

    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.end(str);
})

server.listen(80, ()=>{
    console.log("run!")
})