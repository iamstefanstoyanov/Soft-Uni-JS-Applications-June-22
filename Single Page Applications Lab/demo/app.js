import {sum,product} from './module.js';
import {sum as secondSum} from './second.js';
import Person,{sayHello} from './Person.js';
console.log(sum(3,5));
console.log(product(15,5));
console.log(secondSum(3,2,5));
const myPerson = new Person('Peter', 28);
console.log(myPerson);
export {data} from './module.js';
sayHello(myPerson);