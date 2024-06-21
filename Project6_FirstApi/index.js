
const app = require('http')


app.createServer((req, res) =>{

   res.writeHead(200,{'Content-Type' :'application\json'});
   res.write(JSON.stringify({name:'Wilson Rangari', email:'rangariwilson@gmail.com'}));
   res.end();
}).listen(5000)

