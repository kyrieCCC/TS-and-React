export { }

//索引类型
let person = {
    name: 'wlc',
    age: 20
}
function getValue(person: any, keys: string[]) {
    return keys.map((item) => person[item])
}

console.log(getValue(person, ['name', 'age']));
console.log(getValue(person, ['nothing'])); //输出undefined
//索引类型查询
function getValue_plus<T, K extends keyof T>(person: T, keys: K[]): T[K][] {
    return keys.map((item) => person[item])
}
console.log(getValue_plus(person, ['name', 'age']));
//console.log(getValue_plus(person, ['nothing'])); //报错，无法正常执行
//映射类型
interface Person {
    name: string
    age: number
}
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}
type Partial<T> = {
    [P in keyof T]?: T[P]
}
//使用:
//可选Person
type PersonPartial = Partial<Person>
const personPar: PersonPartial = {
    name: 'wlc',
    age: 18 //写string类型报错
}
//只读Person
type ReadonlyPerson = Readonly<Person>
const readonlyPer: ReadonlyPerson = {
    name: 'penghui',
    age: 18
}