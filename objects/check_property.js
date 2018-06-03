var person = {
    name: 'Nico',
    testVariable: 0,

    sayName: function () {
        console.log(this.name);
    }
};

if (person.name) {
    console.log(person.name);
}

if (person.testVariable) {
    console.log(person.testVariable); // badoom, pssst!
    // variable exists but has value == 0
    // so we should find another way to test property
}

console.log('name' in person);      // true
console.log('sayName' in person);   // true
console.log('age' in person);       // false

console.log('person properties:');
for (property in person) {
    console.log(property + ': ' + person[property]);
}

//
delete person.testVariable;

console.log('person keys:');
const keys = Object.keys(person);
console.log(keys);

//
console.log('toString' in person);              // true
console.log(person.hasOwnProperty('toString')); // false