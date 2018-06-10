var promise = new Promise(function (resolve, reject) {
    // some kind of magic
    var isSuccessful = false;

    setTimeout(function () {
        if (isSuccessful) {
            resolve('Success!');
        }
        else {
            reject(Error('Failure'));
        }
    }, 5000);
});

promise.then(function (val) {
    console.log('[then] val: ' + val);
}).catch(function (val) {
    console.log('[catch] val: ' + val);
});