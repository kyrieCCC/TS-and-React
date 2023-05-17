"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//类型保护
function sayHello() {
    console.log('hello');
}
function sayBye() {
    console.log("byebye");
}
var person1 = {
    name: 'wlc',
    hobby: 'basektball',
    sayHello: sayHello
};
var person2 = {
    name: 'ph',
    age: 18,
    sayBye: sayBye
};
function getAttri(person) {
    //if(person.hobby) //报错，因为这不是联合类型中的一个
    if (person.hobby) {
        return 'this is person1';
    }
    else {
        return 'this is person2';
    }
}
console.log(getAttri(person1));
