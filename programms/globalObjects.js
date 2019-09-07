let time = 0;
const setTime = setInterval(()=>{
    time += 2;
    console.log(`sec time ${time}`);
    console.log(__dirname);
    console.log(__filename);
    if(time > 4){
        clearInterval(setTime);
    }
},2000);