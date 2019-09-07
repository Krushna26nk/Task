const url = require('url');
const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{
    const urlObject = url.parse(request.url,);
    const filePath = `.${urlObject.pathname}`; 

    fs.readFile(filePath,function(err,data){
        if(err){
            response.writeHead(404,{'Content-Type':'text/html'});
            return response.end('404 File Not Found');
        }
        response.writeHead(200,{'Content-Type':'text/html'})
        response.write(data);
        response.end();
    });
});

server.listen(9000,()=>{
    console.log('server running');
})