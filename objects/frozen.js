var person = {
    name: 'Nico'
};

console.log('isExtensible: ' + Object.isExtensible(person));
console.log('isSealed: ' + Object.isSealed(person));
console.log('isFrozen: ' + Object.isFrozen(person));

Object.freeze(person);

console.log('isExtensible: ' + Object.isExtensible(person));
console.log('isSealed: ' + Object.isSealed(person));
console.log('isFrozen: ' + Object.isFrozen(person));

person.sayName = function () {
    console.log(this.name);
};

console.log('sayName: ' + ('sayName' in person)); // false

console.log('Name: ' + person.name); // Nico
person.name = 'Rafi';
console.log('Name: ' + person.name); // Nico

delete person.name;
console.log('name' in person); // true

// [[Configurable]] === false
// [[Writable]] === false