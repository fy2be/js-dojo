var person = {
    name: 'Nico'
};

console.log('isExtensible: ' + Object.isExtensible(person));

person.sayAaa = function () {
    console.log('Aaaaa');
};

console.log('sayAaa: ' + ('sayAaa' in person));   // true

Object.preventExtensions(person);

console.log('isExtensible: ' + Object.isExtensible(person));

person.sayName = function () {
    console.log(this.name);
};

console.log('sayName: ' + ('sayName' in person)); // false

console.log('Name: ' + person.name); // Nico
person.name = 'Rafi';
console.log('Name: ' + person.name); // Rafi

delete person.name;
console.log('name' in person); // false