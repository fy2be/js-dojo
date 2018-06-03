var person = {
    _name: 'Nico',

    get name() {
        console.log('--- getter ---');
        return this._name;
    },

    set name(value) {
        console.log('--- setter ---');
        this._name = value;
    }
};

console.log(person.name);

person.name = 'Rafi';
console.log(person.name);

// but still have access to _name
person._name = 'Rave';
console.log(person._name);


var dog = {
    _name: 'Ramzi',

    get name() {
        return this._name;
    }
};

console.log(dog.name);  // Ramzi
dog.name = 'Inka';      // no error
console.log(dog.name);  // Ramzi

(function () {
    'use strict'; // TypeError: Cannot set property name of #<Object> which has only a getter
    dog.name = 'Inka';
})();
