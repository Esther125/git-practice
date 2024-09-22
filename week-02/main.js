// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();

// TODO: 應該要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
stack.print(); // []
console.log(stack.isEmpty()); // true

stack.push(5);
stack.push(8);
stack.print(); // [5,8]

console.log(stack.peek()); // 8
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 2
console.log(stack.pop()) // 8
stack.print() // [5]
stack.push(5);
stack.print() // [5,5]

stack.clear();
stack.print(); // []

console.log(stack.pop()); // undefine