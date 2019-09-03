
// async function add(a,b){
//     return a+b;
// }

// add(1,3).then(data =>{
//     console.log(data);
// });

function resolveAfter2Seconds(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('resolved');
        },1000);
    });
}
async function asyncCall(){
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
}
asyncCall();