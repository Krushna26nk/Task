/**
 * @description higher order function which return the Function as OutPut or takes the function as argument
 */

 /**
  * @description array.map() one of higher order function
  */

 const array1 = [10,20,30,50,4,8,90];
 const array2 = array1.map((element)=>{
    console.log(element);
    return element * 2;
 }) 
 console.log(array2);

 // ex.2

 const birthYear = [1996,1988,1999,1997,1995,1990,1882];

 const age = birthYear.map( year =>{
     return 2019 - year;
 });
 console.log('\n\n.map() example\n')
 console.log(age);
 

 /**
  * @description array.filter() returns the resultant who pass the test pass in the callback function
  */

const employee = [
    {        name:'Krushna', salry:20000    },
    {        name:'Mayur',   salry:100000   },
    {        name:'Shubham', salry:50000    },
    {        name:'Dhaval',  salry:5000     },
    {        name:'Shubham', salry:15000    }
]

const permnent = employee.filter( element=>
    element.salry > 50000
);

console.log('\n\n.filter() example\n')
console.log(permnent);

/**
 * @description array.reduce() to operate on every each element of the array.
 */

 const arr = [15,25,40,70,86];

 const result = arr.reduce((acumulator,currValue)=>{
    return acumulator + currValue;
 });
 console.log('\n .reduce() example\n');
 console.log(result);