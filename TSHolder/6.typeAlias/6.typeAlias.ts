export { }

//类型别名
type myType = string | boolean

const a: myType = "wlc"
const b: myType = true
//const c: myType = 123 //报错，因为我们定义的类型当中并没有number类型

//类型断言
const str: any = "wlc"
const len1 = str.length //此时直接写length没有代码提示，因为编译器不知道这是字符串类型
console.log(len1);

const len2 = (str as string).length //使用类型断言，确定这是一个字符串类型
//此时出现代码提示
console.log(len2);
