var name = 'Nico';
name.last = 'Laus';

console.log('name: ' + name + ' ' + name.last); // name.last === undefined

// hm...
// var name = 'Nico'
// var temp = new String(name);
// temp.last = 'Laus'
// temp = null;
//
// var temp = new String(name);
// console.log('name: ' + name + ' ' + name.last); // so name.last is undefined...
// temp = null;

var anotherName = new String('Rafi');
anotherName.last = 'Van';

console.log('name: ' + anotherName + ' ' + anotherName.last);

anotherName = null; // good practice, free reference

// but be careful with Packaging...

var found = new Boolean(false);

if (found) {
    console.log('Found!');
} else {
    console.log('Not found.');
}

// expected: Not found.
// result: Found.