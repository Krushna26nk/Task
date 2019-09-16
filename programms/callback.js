// function doTask(myTask , callback){
//     console.log('i am doing my task ', myTask);
//     callback();
// }
// doTask('callback',doneTask);

// function doneTask(){
//     console.log('task done.');
//     console.log('Callback is function that is to be executed after one function finished Execution.');
//     console.log('function s that do this are called as HIGHER ORDER FUNCTION.');
// }

function myDetail(callback){
    var a = 10,b = 10 ,c;
    if(a+b == 30){
        callback(null,a+b)
    } else {
        callback("Error")
    }

}
myDetail((err,res) => {
    if(err){
        console.log(err)
    } else {
        console.log(res);       
    }
    
})
