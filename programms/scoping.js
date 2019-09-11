let myname = 'Krushna';

function fullName(){
    let lastName = ' Nikam'
    console.log(`my name is ${myname} ${lastName} `);
}
fullName();

// last name is not outside the function , because the scope of the lstName variable is within the 
// fullName function();

// console.log(lastName);


// myname will print beacause the scope of the  variable is through out the programm.
console.log(myname);



console.log('\n');

function fullDetail(){
    if(true){
        var myname = 'Krushna';             // function scope
        let lastName = 'Nikam';             // block scope
        const add = 'aurangabad'            //block scope
    }
    console.log(myname);
    console.log(lastName);              // will fetch error
    console.log(add);                   // will fetch error
}
fullDetail();