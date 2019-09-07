const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response)=> {
    fs.appendFile('sample1.html','<h4> Appended Text </h4>',function(err){
        if(err) throw err;
        console.log('file append successfully.')
    })
    
    fs.readFile('sample1.html',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        response.end();
    });
  
    fs.rename('sample1.html','first.html',function(err){
        if(err) throw err;
        console.log('file rename');
    })
});
server.listen(9000,()=>{
    console.log('server running...');
})
