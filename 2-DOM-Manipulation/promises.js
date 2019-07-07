/*work on asynchronous code, it's a callback function

setTimeout(() => console.log('this is a test of timeouts!'), 1000);*/

let promise = new Promise(function(resolve, reject){
setTimeout(() => {
    if (true){
    resolve('success');
    } else {
    reject('failure');
    }
} , 3000);
})

promise
.then(success => console.log(success));