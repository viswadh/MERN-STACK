const http=require('http');
const server=http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
res.write("Node Server Running");
res.end();
});
server.listen(3000);