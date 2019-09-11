interface detail {
    firstName : string,
    lastName : string,
    sayHi : ()=>string,
}

var person: detail ={
    firstName : 'Krushna',
    lastName : 'Nikam',
    sayHi:(): string=>{return 'hi...'}
}

console.log('person object');
console.log(person);
