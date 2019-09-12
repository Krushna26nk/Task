/**
 * @description using LET CONST instead of VAR
 */

let x = 3;
function func(random){
    if(random){
        let x = Math.random();
        return x;
    }
    return x;
}
console.log(func(true));


/**
 * @description avoiding IIFE
 */

 {
     let name = 'Krushna';
     const mob = 9028960981;

     console.log(name,mob);
 }


 /**
  * @description template literals
  */

  let name = "Krushna";
  let lastName = "Nikam";

  console.log(`My full Name  is ${name} ${lastName}`);

  /**
   * @description arrow function
   */

   const arr = [10,50,90,80,60,52 ]

   const arr2 = arr.map((data) =>{
       return data + (data * 2);
   })

   console.log(arr2);

   /**
    * @description for - of
    */
   
   for(const element of arr){
       console.log(element);
   }

   /**
    * @description parameter default values
    */

    !function(x=0,y=0){
        console.log(x,y);
    }();
    

    /**
     * @description spread operator
     */

     console.log(Math.max(...arr));