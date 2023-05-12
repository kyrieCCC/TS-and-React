export { }

//定义一个interface
interface IPerson {
    /* 只读属性，一旦赋值后无法进行修改 */
    readonly name: string;
    age: number;
    /* 表示只能选其中内容之一 */
    sex: 'boy' | 'girl' | 'undefined';
    /* 可选属性，该属性可以不存在 */ 
    hobby?: string
    /* 任意属性，约束所有对象属性都应是该属性子类型 */
    [key: string]: any
}


//初始化一个person
const person: IPerson = {
    name: "wlc",
    age: 18,
    sex: 'boy',
    hobby: "basektball"
}