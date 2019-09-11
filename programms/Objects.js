/**
 * @description .create() Object Method
 */

const job = {
    position:'Testing',
    type:'full',
    isAvailable : true,
    showDetails() {
        const accepting = this.isAvailable ? 'accepting Applications.':'note accepting appl.';
        return `This ${this.position} is ${this.type} time job currently ${accepting}`;
    }
}
console.log(job.showDetails());
const developer = Object.create(job);
developer.position = 'Developer';
console.log('after creating object --->\t ',developer.showDetails());


/**
 * @description keys() object method
 */
console.log('\n keys()');

const employees = {
    name : 'krushna',
    lastName : 'Nikam',
    position : 'FrontEnd Developer',
    location: 'Mumbai'

}

const keys = Object.keys(employees);
console.log(`\n Keys.. \t ${keys}`);


/**
 * @description .values() method
 */

 const operatingSystem = {
     name:"ubuntu",
     version:18.04,
     license:'open source'
 };

 const detail = Object.values(operatingSystem);
 console.log('\n .values() ',detail);

 const detailEntries = Object.entries(operatingSystem);
 console.log('\n .entries() \n', detailEntries);



 /**
  * @description .assign() used to assign properties of one object to other.
  */

  
const name ={
    firstName : "Krushna",
    lastName : "Nikam"
}

const details = {
    job : 'Front End Developer',
    employee : 'Trainne'
}

const assign = Object.assign(name , details);
console.log('\n .assign() \n' , assign);



/**
 * @description .freeze() to prevent from modification and adding or removing properties.
 */


const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log('\n .freeze() \n',newUser);