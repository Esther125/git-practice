// Do not modify the original doJob function
function doJob(job, time, cb) {
    setTimeout(() => {
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

// Execution order: 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

// Optimize the code using Promise
// Wrap the original doJob function to make it return a Promise object
function doJobPromise(job, time) {
    return new Promise((resolve) => {
        doJob(job, time, resolve);
        // doJob calls resolve() and passes the "完成工作..." message when it completes
        // When the resolve() is called, doJobPromise knows the Promise has been resolved
    });
}

doJobPromise("刷牙", 1000)
    // When the state of the Promise object changes from pending to resolved
    // .then() will be triggered, receiving the result passed by resolve()
    .then((result) => {
        console.log(result);
        // After the previous task, return the Promise object for the next task
        return doJobPromise("吃早餐", 3000);
    })
    .then((result) => {
        console.log(result);
        return doJobPromise("寫功課", 1000);
    })
    .then((result) => {
        console.log(result);
        return doJobPromise("吃午餐", 2000);
    })
    .then((result) => {
        console.log(result);
    });
