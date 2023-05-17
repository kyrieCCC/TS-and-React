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
