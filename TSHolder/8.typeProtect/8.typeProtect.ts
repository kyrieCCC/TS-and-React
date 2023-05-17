export { }

//类型保护
function sayHello() {
    console.log('hello')
}
function sayBye() {
    console.log("byebye")
}
interface IPerson1 {
    name: 'wlc';
    hobby: string;
    sayHello()
}
interface IPerson2 {
    name: 'ph'
    age: number
    sayBye()
}

const person1: IPerson1 = {
    name: 'wlc',
    hobby: 'basektball',
    sayHello: sayHello
}
const person2: IPerson2 = {
    name: 'ph',
    age: 18,
    sayBye: sayBye
}

function getAttri(person: IPerson1 | IPerson2) {
    //if(person.hobby) //报错，因为这不是联合类型中的一个
    if ((person as IPerson1).hobby) {
        return  'this is person1'
    } 
    else {
        return 'this is person2'
    }
}
console.log(getAttri(person1));
console.log(getAttri(person2));
//类型保护函数
function isPerson1(person: IPerson1 | IPerson2): person is IPerson1 {
    return (<IPerson1>person).hobby !== undefined
}

//引入类型保护函数
function getAttri_protect(person: IPerson1 | IPerson2) {
    //引入类型保护
    if (isPerson1(person)) {
        return  'this is person1'
    } 
    else {
        return 'this is person2'
    }
}
console.log(getAttri_protect(person1));
console.log(getAttri_protect(person2));
