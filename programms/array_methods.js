let array = [
   "60","70", "10","40","20","30","50","80","90",
];
console.log(array);
let myName = ["is","Krushna"];
let myAddress = ["Aurangabad","Maharashtra"];

array.push("150");
console.log("push array =>",array);

let details = myName.concat(myAddress);
console.log("concat array",details);

/** array splice */

let arraySplice = array.splice(1,2,"1540");
console.log("array splice  ==> ",array);

/**
 * array.map
 */
array = array.map((element) => element * 2);
console.log("mapped array ==>",array);

/**
 * string split
 */

 let str = " my name is krushna"
 let splitArray = str.split(",");
 console.log(splitArray);

 /**  * array filter  */

  let filter = array.filter((element)=>{
      return element > "60";
  });
  console.log("array filter ==> ",filter);

/** array search find */

let find = array.find((element) =>{
    return element > "60";
});
console.log("find array",find);
