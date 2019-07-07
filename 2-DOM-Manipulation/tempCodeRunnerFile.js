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