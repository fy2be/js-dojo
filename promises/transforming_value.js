var promise = Promise.resolve('A');

promise.then(function (v) {
    console.log('1: ' + v);
    return v + 'B';
}).then(function (v) {
    console.log('2: ' + v);
    return v + 'C';
}).then(function (v) {
    console.log('3: ' + v);
    return v + 'D';
}).then(function (v) {
    console.log('4: ' + v);
});