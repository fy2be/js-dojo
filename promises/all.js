var promise1 = new Promise(function (resolve, reject) {
    console.log('[promise1]');
    setTimeout(function () {
        resolve('A');
    }, 1000);
});

var promise2 = new Promise(function (resolve, reject) {
    console.log('[promise2]');
    setTimeout(function () {
        resolve('B');
    }, 2000);
});

var promise3 = new Promise(function (resolve, reject) {
    console.log('[promise3]');
    setTimeout(function () {
        resolve('C');
    }, 5000);
});

var promise4 = new Promise(function (resolve, reject) {
    console.log('[promise4]');
    setTimeout(function () {
        reject(Error('X'));
    }, 3000);
})

Promise.all([promise1, promise2, promise3, promise4]).then(function (result) {
    console.log('[then]: ' + result);
}).catch(function (result) {
    console.log('[catch]: ' + result);
});
