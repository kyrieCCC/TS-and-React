"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. 联合类型
function test(params1) {
    if (typeof params1 === 'string') {
        return 'this is string type';
    }
    if (typeof params1 === "number") {
        return 'this is number type';
    }
    throw new Error("invaild type");
}
console.log(test(123));
console.log(test("wlc"));
//console.log(test(true)); //报错，因为这不是指定的联合类型指定的类型之一
//2. 交叉类型
var bookList = [{
        author: 'Kyriechen',
        type: 'person',
        range: '2002-2023',
    }, {
        author: 'Jay Chou',
        type: 'music',
        theme: 'love',
    }];
