console.log('------start');

let async = require('async');

async.series([
    function(callback){
        console.log('first step -->');
        callback(null,'1');
    },
    function(callback){
        console.log('second step -->');
        callback(null,'2');
    }
],function(err,result){
    console.log(result);
});
console.log('----------end')