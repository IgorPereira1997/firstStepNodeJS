const modulo = require('./printName');
const os = require('os')

console.log('Hello World, '+ modulo.printName('Igor'), modulo.lastName('Pereira')+'!');
console.log('System in Use: ', os.type());