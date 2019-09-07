const http = require('http');

let server = http.createServer((request,response) =>{
    response.write('Server Creation using http module\n');
    response.end();
});

server.listen(9000,() =>{
    console.log('server running ..')
})