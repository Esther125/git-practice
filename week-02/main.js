// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();
console.log(stack.isEmpty()); // True

stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
console.log(stack.peek()); // 8
console.log(stack.isEmpty()); // False
console.log(stack.size()); // 2
stack.clear();
stack.print(); // []
