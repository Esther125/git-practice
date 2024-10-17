// Basic
// Method1: Use Reduce Function
function sum_with_reduce(ary) {
    let result = ary.reduce((accumulator, current) => accumulator + current);
    return result;
}
console.log(sum_with_reduce([1, 5, 3, 2])); // 11

// Method2: Use forEach() Function
function sum_with_for_each(ary) {
    let sum = 0;
    ary.forEach((element) => {
        sum += element;
    });
    return sum;
}
console.log(sum_with_for_each([1, 5, 3, 2])); // 11

// Method3: Use join() & eval()
function sum_with_eval_and_join(ary) {
    let result = eval(ary.join("+"));
    return result;
}
console.log(sum_with_eval_and_join([1, 5, 3, 2])); // 11

// Method4: Use lodash
var _ = require("lodash");
function sum_with_lodash(ary) {
    let result = _.sum(ary);
    return result;
}
console.log(sum_with_lodash([1, 5, 3, 2])); // 11

// Method5: Use Recursion
function sum_with_recursion(ary) {
    if (ary.length == 0) {
        return 0;
    }
    if (ary.length == 1) {
        return ary[0];
    } else {
        return ary[0] + sum_with_recursion(ary.slice(1));
    }
}
console.log(sum_with_recursion([1, 5, 3, 2])); // 11

// Advanced
// 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
function sum_n(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sum_n(n - 1);
    }
}

console.log(sum_n(1)); // 1
console.log(sum_n(5)); // 15
console.log(sum_n(10)); // 55
