"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//索引类型
var person = {
    name: 'wlc',
    age: 20
};
function getValue(person, keys) {
    return keys.map(function (item) { return person[item]; });
}
console.log(getValue(person, ['name', 'age']));
console.log(getValue(person, ['nothing'])); //输出undefined
//索引类型查询
function getValue_plus(person, keys) {
    return keys.map(function (item) { return person[item]; });
}
console.log(getValue_plus(person, ['name', 'age']));
//console.log(getValue_plus(person, ['nothing'])); //报错，无法正常执行
