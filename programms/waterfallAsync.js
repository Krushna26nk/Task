console.log('---start');
let async = require('async');
async.waterfall([
        function(callback) {
            console.log('first step.');
            callback(null,'1');
        },
        function(arg1,callback){
            console.log('second step',arg1);
            callback(null,'1','2');
        },
        function(arg1,arg2,callback){
            console.log('third step',arg1,arg2);
            callback(null,'3')
        }
],function(err,result){
    console.log('final result ==>',result);
}
);

console.log('------end');