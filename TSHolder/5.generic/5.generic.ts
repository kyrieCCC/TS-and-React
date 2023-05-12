export { }


//函数声明
function returnParam<T>(param: T): T {
    return param
}
function swap<T, U>(dataArr: [T, U]): [U, T] {
    return [dataArr[1], dataArr[0]]
}

//接口声明
interface IGetParam<T> {
    (param1: T): T
}

const getParam: IGetParam<string> = (param1) => param1

//类声明
class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}
 
const stack = new Stack<number>()

//泛型约束
type IReturnStrArr = <T extends string>(p2: T) => T[] 
const returnStrArr: IReturnStrArr = (p2) => new Array(10).fill(p2)
//returnStrArr(123) //报错
returnStrArr("ph")

//泛型默认参数
type IReturnArr<T = number> = (p3: T) => T[]
const returnArr: IReturnArr = p3 => new Array(10).fill(p3)
//returnArr("ph") //报错
returnArr(43)