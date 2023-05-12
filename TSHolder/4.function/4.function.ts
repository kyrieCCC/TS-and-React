export { }

interface IMult {
    (x: number, y: number): number
}

//具名函数
function add(x: number, y: number): number{
    return x + y
}
//匿名函数
const withoutNamt = function (x: number, y: number): number {
    return x + y + 1
}
//箭头函数, 转换为匿名函数
const mult: (x: number, y: number) => number = (x, y) => x * y
//也可使用接口
const Mymult: IMult = (x, y) => x * y

console.log(add(1, 2));
console.log(withoutNamt(1, 2));
console.log(mult(2, 2));
console.log(Mymult(2, 2));




