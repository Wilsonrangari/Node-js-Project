const http = require('http')

http.createServer((req, res)=>{
        res.write('<h1>Hello I am Wilson Rangari</h1>')
        res.end()
}).listen(4500);
