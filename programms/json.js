let details = {
    name : 'Krushna',
    lastName : 'Nikam',
    no : 9028960981,
    address : 'aurangabad'
};
let stringify  = JSON.stringify(details);
console.log(stringify);

let json = JSON.parse(stringify);
console.log(json);