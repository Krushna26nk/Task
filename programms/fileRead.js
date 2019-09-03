// var http = require('http');
var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('sample.txt', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8081);

fs.readFile('sample.txt','utf-8',function(err,data){
    console.log(data);
})