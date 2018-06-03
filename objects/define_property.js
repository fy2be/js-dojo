var person1 = {
    name: 'Nicholas'
};

Object.defineProperty(person1, 'name', {
    enumerable: false
});

console.log('name' in person1);     // true
console.log(person1.propertyIsEnumerable('name'));  // false

var properties = Object.keys(person1);
console.log(properties.length); // 0 :)

//
Object.defineProperty(person1, 'name', {
    configurable: false
});

delete person1.name; // error in strict mode

console.log('name' in person1); // true

// Object.defineProperty(person1, 'name', { // TypeError: Cannot redefine property: name
// configurable: true
// });

//
var person2 = {};

Object.defineProperty(person2, 'name', {
    value: 'Rafi',
    enumerable: true,
    configurable: true,
    writable: false // false is default
});

console.log(person2.name); // Rafi
person2.name = 'Ojejq';
console.log(person2.name); // still Rafi


//
var person3 = {};

Object.defineProperties(person3, {
    _name: {
        value: 'Jan',
        enumerable: true,
        configurable: true,
        writable: true
    },

    name: {
        get: function () {
            console.log(' --- get --- ');
            return this._name;
        },

        set: function (val) {
            console.log(' --- set --- ');
            this._name = val;
        },

        enumerable: true,
    }
});

properties = Object.keys(person3);
console.log(properties);

console.log(person3.name);
person3.name = 'Julian';
console.log(person3.name);

person3.xxx = function () { return -1; }
console.log(person3.xxx());

//
var descriptor = Object.getOwnPropertyDescriptor(person3, 'name');
console.log(descriptor.enumerable); // true
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // undefined ?
console.log(descriptor.value); // undefined ?