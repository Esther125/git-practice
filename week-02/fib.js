// Method 1: Use Recursion
function fib(n) {
    // TODO: implement fibonacci
    if (n == 0) {
        return 0;
    } else if (n == 1 || n == 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

// Method 2: Use for loop
function fib_2(n) {
    let arr = [1, 1];
    if (n == 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    for (let i = 3; i <= n; i++) {
        let tmp = arr[i - 3] + arr[i - 2];
        arr.push(tmp);
    }
    return arr[n - 1];
}

console.log(fib_2(0)); // 0
console.log(fib_2(1)); // 1
console.log(fib_2(5)); // 5
console.log(fib_2(10)); // 55
console.log(fib_2(15)); // 610
