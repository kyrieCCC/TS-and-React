"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//函数声明
function returnParam(param) {
    return param;
}
function swap(dataArr) {
    return [dataArr[1], dataArr[0]];
}
var getParam = function (param1) { return param1; };
//类声明
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack;
}());
var stack = new Stack();
var returnStrArr = function (p2) { return new Array(10).fill(p2); };
//returnStrArr(123) //报错
returnStrArr("ph");
var returnArr = function (p3) { return new Array(10).fill(p3); };
//returnArr("ph") //报错
console.log(returnArr(43))
