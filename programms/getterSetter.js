const details  = {
    name : "Krushna",
    lastName : "Nikam",
    get fullName(){
        return `${this.name } ${this.lastName}`;
    },
    set fullName(inputvalue){
        const splitArray = inputvalue.split(' ');
        this.name = splitArray[0];
        this.lastName = splitArray[1];
    }
}
details.fullName = "Laxman Nikam"
console.log(details);