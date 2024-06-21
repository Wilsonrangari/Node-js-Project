const http = require('http')

http.createServer((req, res)=>{
        res.write('Hello I am Wilson Rangari')
        res.end()
}).listen(4500);