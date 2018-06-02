function ret(value) {
    return value;
}

console.log('--- ret(value) {} ---');
console.log(typeof ret); // function
console.log(ret instanceof Function); // true
console.log(ret instanceof Object); // true

var ret2 = function (x) {
    return x;
};

console.log('--- ret2 = function(x) ---');
console.log(typeof ret2); // function
console.log(ret2 instanceof Function); // true
console.log(ret2 instanceof Object); // true

var items = [];

console.log('--- items = [] ---');
console.log(typeof items); // object
console.log(items instanceof Array); // true
console.log(items instanceof Object); // true
console.log(Array.isArray(items)); // true

var object = {};

console.log('--- object = {} ---');
console.log(typeof object); // object
console.log(object instanceof Object); // true
console.log(object instanceof Array); // false
console.log(Array.isArray(object)); // false