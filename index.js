const http = require('http')


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/jason'})

    if(req.url === '/auth'){
        res.end(
            JSON.stringify({
                data: auth
            })
            )
        }

})

server.listen(8000, () => {
    console.log('Server running on port 8000')
})