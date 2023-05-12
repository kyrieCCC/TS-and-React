"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//具名函数
function add(x, y) {
    return x + y;
}
//匿名函数
var withoutNamt = function (x, y) {
    return x + y + 1;
};
//箭头函数
var mult = function (x, y) { return x * y; };
//也可使用接口
var Mymult = function (x, y) { return x * y; };
console.log(add(1, 2));
console.log(withoutNamt(1, 2));
console.log(mult(2, 2));
console.log(Mymult(2, 2));
