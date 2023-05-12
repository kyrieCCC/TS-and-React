"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. any
var any1 = 123;
var any2 = "wlc";
var any3 = true;
//2. number
var num1 = 123;
//3. string
var str1 = "wlc667";
//4. boolean
var boo1 = true;
//5. Array
//纯数字的数组类型
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4, 5];
//6. tuple
var tuple1;
tuple1 = ["wlc", 18, true]; // 运行正常
// tuple1 = ["wlc", "zcr", "1"] // 报错
//7. enum
//枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); //输出2
//8. void
function noReturn() {
    console.log("hello world!");
}
//9. null and undefined
var x;
x = 1;
x = null;
x = undefined;
