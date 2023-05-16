# TS的学习笔记
## 什么是typescript？
在官方文档单中是这样介绍ts的，**TypeScript is JavaScript with syntax for types**，意思是ts是具有类型语法的js。准确来说，ts是js的一个超集，这也就是说ts当中包括了js的全部内容，在其基础上进行拓展。

ts是一个**静态类型检查器**，为什么这么说呢，首先我们需要先了解什么是静态检查？当我们在程序代码编写完成后，在不运行代码的情况下检测其中的错误，这样的检查成为**静态检查**，根据被操作的值的种类来确定是什么错误和什么不是错误，这称为静态类型检查。

我们的ts就是会在执行代码之前，根据值的类型来检查程序是否存在错误，也就是说这是一种静态类型检查器

## typescript的基础类型
typescript作为js的超集，它包含了js中的全部数据类型，并在此基础上新增了属于ts的数据类型，具体如下
### 1. any 任意类型
声明为 any 的变量可以赋予**任意类型**的值。它常用于以下三种情况
1. 变量的值会动态改变时，比如来自**用户的输入**，任意值类型可以让这些变量跳过编译阶段的类型检查
2. 改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查
3. 定义存储**各种类型**数据的**数组**时

### 2. number 数字类型
双精度64位的浮点值，使用的方式与js当中类似，但是在其中不会细分出类似int和float类型，而是会把整数与浮点数同时合并为number类型

### 3. string 字符串类型
字符串类型的使用方式与js当中类似

### 4. boolean 布尔值
当中只有两个值：true 和 false，分别表示正确与错误

### 5. array 数组类型
在js当中并没有显式的去单纯定义一个array这样的数组类型，而在ts当中我们新增了这一类型

例如当我们需要创建一个纯数字的数组类型，我们可以通过以下方式进行声明
```ts
let arr : number[] = [1, 2, 3]

//也可以使用泛型进行声明
let arr2 : Array<number> = [1, 2, 3, 4]
```

### 6. tuple 元组类型
元组类型用来表示**已知元素数量和类型的数组**，各元素的类型**不必相同**，对应位置的类型**需要相同**。

简单来说就是一个确定位置和类型的数组，使用如下
```ts
let tuple1 : [string, number]

tuple1 = ["wlc", 18] //正常使用
tuple2 = [123, 18] // 报错，因为此时的两个位置上的值都是number类型
console.log(tuple1[0]) // 输出"wlc"
```

### 7. enum 枚举类型
枚举类型用于定义**数值集合**。
```ts
//定义一个Color的枚举类型
enum Color {Red, Green, Blue};

let c: Color = Color.Blue;
console.log(c);  //输出2
```

### 8. void 返回值类型
用于标识方法**返回值的类型**，表示该方法**没有返回值**。

当我们的函数当中没有返回值，如没有return，或者是return的是一个空值或者undefined的时候就需要用到返回值为void

```ts
//没有返回值，使用 void进行返回值的标识
function noReturn(): void {
    console.log("there is no any return value")
}
```

### 9. null and undefined
null和undefined类型在js当中经常被使用，在ts当中的使用方法也与在js当中使用类似

null表示这是一个空对象，undefined表示这个值没有被定义，或者说是没有被赋值

### 10. never 其他类型
never 是其它类型（包括 null 和 undefined）的子类型，代表**从不会出现的值**

这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）

## typescript的对象数据类型 （interface接口）
在ts当中同样有对象数据类型这一说法，我们的接口就是这一系列抽象方法的声明，是这些方法的集合

我们可以**抽象成类**去实现

一个ts的接口定义如下：
```ts
//创建了一个名为IPerson的接口
interface IPerson {
    xxx,
    xxx,
    xxx
}
```
在我们定义一个类接口的时候，通常在命名的时候在**前面加上I再加上接口名**，表示这是一个接口

在接口的定义的时候存在非常多的操作，例如**只读属性**、**可选属性**和**任意属性**等等

## typescript的函数类型
在js当中函数经常被使用，相比于我们js当中对函数的编写，ts中的函数就是在js函数的基础上添加了一些内容

我们可以支持在ts当中的为函数**添加参数以及返回值的类型**，例如
```ts
//这是在js当中的写法
function add(x, y) {
    return x + y
}

//这是在ts当中的写法
function add(x: number, y: number): number {
    return x + y
}

//我们可以看到我们为参数添加了number的限制，以及定义了返回值必须是一个number类型的数值
```
我们可以有很多种方法来定义一个函数类型，例如匿名函数，箭头函数等等
```ts
//匿名函数 - js
const add = function(x, y) {
    return x + y
}

//匿名函数 - ts
const add_ts = function(x: number, y: number): number {
    return x + y
}


//箭头函数 - js
const mult = (x, y) => {
    return x * y
}

//箭头函数 - ts
const mult_ts: (x: number, y: number) => number = (x, y) => x * y


//接口
interface IMult {
    (x: number, y: number): number
}
const myMult: IMult = (x, y) => x * y
```
### 函数重载
重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。
```ts
// 参数类型不同：
function disp(string):void; 
function disp(number):void;

// 参数数量不同：
function disp(n1:number):void; 
function disp(x:number,y:number):void;
```
    
## 类型推断和定义类型
### 类型推断
TypeScript可以识别js语言，在许多情况下可以推断类型，例如在创建变量的时候，将其赋值给特定值的时候，ts就会使用该值作为其类型值

```ts
const data = "hello world!"

//此时的data就会被定义为string类型
```

## typescript 泛型
泛型程序设计是程序设计语言中的一个风格或者说是范式

泛型允许我们在强类型语言中编写的代码只有**在使用的时候才指定的类型**，在实例化时作为参数指明这些类型在ts中，定义函数，接口或者类的时候，**不预先定义好具体的类型**，**而在使用过的时候指定类型的一种特性**

举一个简单的例子，我们在定义一个函数的时候，这个函数可以接收一个参数number并可以返回一个参数number，这样的写法未免重复性有点高，于是我们可以考虑使用**泛型**

使用方式：

> 泛型通过 <> 的形式来进行表示，可以声明
+ 函数
+ 接口
+ 类
### 1. 函数声明
```ts
function returnParams<T>(p: T): T {
    return p
}
```
定义泛型的时候，可以一次**定义多个类型参数**，比如我们可以同时定义泛型 T 和泛型 U
```ts
function swap<T, U>(dataArr: [T, U]): [U, T] {
    return [data[1], data[0]]
}

swap([1, "second"]) //return ["second", 1]
```

### 2. 接口声明
```ts
interface IReturnParams<T> {
    (param: T): T
}

//使用
const returnParamsL: IReturnParams<number> = param => param
```

### 3. 类声明
使用泛型声明类的时候，既可以用于类本身，也可以作用与类的成员函数

```ts
class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}

//使用
const stack = new Stack<number>()
```

### 泛型约束和参数默认
```ts
/* 泛型约束：限制泛型必须符合指定的类型（此处为字符串） */
type IGetStringArr = <T extends string>(target: T) => T[]
const getStrArr: IGetStringArr = target => new Arrar(100).fill(target)
getStrArr(132) //报错，因为传入的并不是一个字符串
getStrArr("ph") //正常运行

/* 泛型参数默认类型 */
type IGetRepeatArr<T = number> = (target: T) => T[]
const getRepeatArr: IGetRepeatArr = target => new Arrar(100).fill(target)
getRepeatArr("ph") //报错，因为传入的并不是一个数字
getRepeatArr(123) //正常运行
```

## 类型别名
类型别名会给一个类型起一个新名字，类型别名有时候跟接口很像，但是可以作用于原始值、联合类型、元组以及其他任何你需要手写的类型
```ts
type myType = boolean | string

const a: myType = true //正确
const b: myType = 123 //报错，因为这里不属于指定类型中的一个
const c: myType = "wlcph" //正确
```
当然类型别名也可以是泛型
```ts
type Container<T> = {value: T}


//在二叉树中的使用
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>
}
```
从这可以看出，类型别名和接口使用非常相似，都可以描述一个对象或者函数

两者的区别在于，**interface只能用于定义对象类型**，而type的声明方式除了对象之外**还可以定义交叉、联合、原始类型**等等，类型声明的方式适用范围更加广泛

## 类型断言
类型断言简单来说就类似于一种**解释型强制类型转换**，其实就是一个“欺骗”编译器的方法，告诉编译器我们不用你们帮我检查，让我自己确定

可以使用 **as** 关键字来进行使用

有以下的使用场景：
```ts
//最常见的场景，就是将联合类型进行断言
const str: any = "wlcaiph"
//当我们在直接str.length的时候是没有length的提示的
const len = (str as string).length

//还可以将我们的父类断言为子类等等使用方法
```
## 高级类型
### 交叉类型（Intersection Types）
交叉类型是将**多个类型合并为一个类型**，这让我们可以把现有的多种类型叠加到一起成为一种类型，它可以包含了所需的所有类型的特性

> 例如，我们现在有三个类型：Person、Moment和Sport，我们可以使用交叉类型，即**Person&Moment&Sport**。就是说这个类型的对象同时拥有了这三种类型的成员

我们大多是在混入（mixins）或其他不适合典型面向对象模型的地方看到交叉类型的使用。

### 联合类型（Union Types）
联合类型与交叉类型很有关联，但是使用上却完全不同，偶尔会有这样的情况，一个代码库希望传入number或者是string类型的参数

> 举一个简单的例子，现在有一个函数，并且函数接收一个参数params1，这个参数可以是number或者是string类型，但是在不使用联合类型的情况下，我们只能指定为any类型

```ts
function test(params1: any) {
    if(typeof params1 == 'string') {
        return 'this is string'
    }
    if(typeof params1 == 'number') {
        return 'this is number'
    }
    throw new Error("invaild value")
}
```
此时我们传入正常的number还有string就会正常运行