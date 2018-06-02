var numbers = [1, 5, 8, 4, 7, 10, 2, 6, 11, 13];
console.log('Before: ' + numbers);

numbers.sort();
console.log('After default sort: ' + numbers);

// expected: 1,2,4,5,6,7,8,10,11,13
// result:   1,10,11,13,2,4,5,6,7,8

// by default sort converts items of the array to the string
// and then sort them

numbers.sort((a, b) => a - b);
console.log('After sort with function: ' + numbers);

// expected: 1,2,4,5,6,7,8,10,11,13
// result:   1,2,4,5,6,7,8,10,11,13