const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('HELLO JEEE')
    } else if(req.url === '/about'){
        res.end('HELLO JEEE from about')
    } else {
        res.end(
            `
            <h1>OpSpS</h1>
            <a href="/">WAY TO HOME</a>
            `)
    }
})

server.listen(5000)
