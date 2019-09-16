var obj = {
  name : "Krushna"
};

var welcome = function(a,b,c){
    return "Hello "+this.name+" welcome to "+a+" "+b+" in "+c;
};
console.log('\n call \n');
console.log(welcome.call(obj,"mumbai","vashi","IND\n"));
 
var obj = {name:"Krushna"};

var welcome = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

var args = ["vashi","mumbai","IND"];  
console.log(welcome.apply(obj,args));





var obj = {name:"Krushna"};

var welcome = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

//creates a bound function that has same body and parameters 
var bounded = welcome.bind(obj); 

console.log(bounded("vashi","mumabi","IND")); //call the bound function