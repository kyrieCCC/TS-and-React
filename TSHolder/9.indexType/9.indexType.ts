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