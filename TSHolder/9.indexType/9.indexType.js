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
var personPar = {
    name: 'wlc',
    age: 18 //写string类型报错
};
var readonlyPer = {
    name: 'penghui',
    age: 18
};
