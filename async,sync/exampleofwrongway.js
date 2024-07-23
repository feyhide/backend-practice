const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('HELLO JEEE')
    } else if(req.url === '/about'){
        for (let i = 0; i < 10000; i++) {
            for (let j = 0; j < 10000; j++) {
                console.log(i,j)
            }
        }
        res.end('HELLO JEEE from about')
    } else {
        res.end("error page")
    }
})

server.listen(5000,()=>{
    console.log("SERVER IS LISTENING ON PORTT")
})

// what will happen when user go to about
// it will load for that loop and every user request got delayed
// until loop will end