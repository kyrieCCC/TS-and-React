//ts当中的基本类型
export {}

//1. any
let any1: any = 123
let any2: any = "wlc"
let any3: any = true

//2. number
let num1: number = 123

//3. string
let str1: string = "wlc667"

//4. boolean
let boo1: boolean = true

//5. Array
//纯数字的数组类型
let arr1: number[] = [1, 2, 3, 4]
let arr2: Array<number> = [1, 2, 3, 4, 5]

//6. tuple
let tuple1: [string, number, boolean]
tuple1 = ["wlc", 18, true] // 运行正常
// tuple1 = ["wlc", "zcr", "1"] // 报错

//7. enum
//枚举类型
enum Color {Red, Green, Blue};

let c: Color = Color.Blue;
console.log(c);  //输出2

//8. void
function noReturn(): void {
    console.log("hello world!")
}

//9. null and undefined
let x: number | null | undefined
x = 1
x = null
x = undefined
