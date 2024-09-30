// 不更動原本的 doJob 函數
function doJob(job, time, cb) {
    setTimeout(() => {
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

// 執行順序: 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

// 利用 Promise 優化程式
// 將原本的 doJob 函數多包一層 使他能返回 Promise 物件
function doJobPromise(job, time) {
    return new Promise((resolve) => {
        doJob(job, time, resolve);
        // 當 doJob 完成時，調用 resolve()，並將結果傳遞給 doJobPromise
        // 這樣 doJobPromise 就知道該 Promise 已經解決了（resolved）
        // doJob 函數中會把 "完成工作" 的字樣傳遞給 resolve
    });
}

doJobPromise("刷牙", 1000)
    // 當 Promise 物件的狀態從 pending 變成 resolved
    // .then() 會被觸發，接收由 resolve() 傳遞的結果
    .then((result) => {
        console.log(result);
        // 前個任務執行後返回下一個任務的 Promise 物件
        // 繼續執行下一個任務
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
