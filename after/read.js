const http = require('http')
const server = http.createServer()
server.on('request', (req, res)=>{
    console.log('link start!')
    console.log(req.url)
})

server.listen(80, ()=>{
    console.log("run!")
})