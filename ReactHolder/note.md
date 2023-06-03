# React 学习笔记
## JSX
JSX 是 JavaScript 语法扩展，可以让你在 JavaScript 文件中书写类似 HTML 的标签。虽然还有其它方式可以编写组件，但大部分 React 开发者更喜欢 JSX 的简洁性，并且在大部分代码库中使用它。

每个 **React 组件都是一个 JavaScript 函数**，它会返回一些标签，React 会将这些标签渲染到浏览器上。React 组件使用一种被称为 JSX 的语法扩展来描述这些标签。
### JSX 规则
#### 1. 只能返回一个根元素
如果想要在一个组件中包含多个元素，需要用一个**父标签把他们包裹起来**

> 如果你不想在标签中增加一个额外的 <div>，可以用 <> 和 </> 元素来代替

```jsx
// 一个组件的HTMl代码需要有一个共同的父标签将其包裹起来
<div>
    <span>这是一段测试内容</span>
    <p>132456789</p>
    <div>woapenghui</div>
</div>
```
#### 2. 标签必须闭合
JSX要求标签必须正确闭合，像<img>这样的标签需要书写成<img />，而其他带闭合标签的标签需要完成闭合
```jsx
<div>
    <!-- 单闭合标签 -->
    <img
        src="http://localhost:7001/app/src/pulic"
        alt="this is a image"
        class="photo"
    />
    <!-- 闭合标签 -->
    <ul>
        <li>123</li>
        <li>456</li>
        <li>789</li>
    </ul>
</div>
```

#### 3. 使用驼峰式命名法给大部分属性命名
JSX 最终会被转化为 JavaScript，而 JSX 中的属性也会变成 JavaScript 对象中的键值对。在你自己的组件中，经常会遇到需要用变量的方式读取这些属性的时候。但 JavaScript 对变量的命名有限制。例如，变量名称不能包含 - 符号或者像 class 这样的保留字

```jsx
<div>
    <img
        src="http://localhost:7001/app/src/pulic"
        alt="this is a image"
        className="photo"
    />
</div>
```

### 通过大括号使用JavaScript
上文我们说到，JSX中允许我们编写HTML标签，但是往往我们一个组件当中会涉及到各种各样的逻辑操作，例如一些数值的动态计算等等，这时候需要我们使用js来定义一些变量，那么在JSX文件当中，我们就可以通过大括号的形式来引入js语言

例如我们现在需要编写一个小组件，输出的内容为自定义的动态内容

```jsx
const littleComp = () => {
    const time = getTime()

    return (
        <div>
            <span>
                <!-- 动态获取时间 -->
                现在的时间是: {time}
            </span>
        </div>
    )

}

export default littleComp;
```
在哪里可以使用大括号？

1. 用作JSX标签内的**文本**：`<div>my name is {name}</div>`
2. 用作跟紧在 **=**后的**属性**: `src={avatar}`会读取avatar变量，但是src="{avatar}"则只会表示这个是一个字符串

### 双大括号，JSX中的CSS和对象
除了字符串、数字和其他JavaScript表达式，你甚至可以在JSX当中传递对象，但是这个时候就会出现一个新的问题，就是我们上文提到大括号是用来表达JSX中的某些变量类型，如果直接使用大括号来表示这个时候的对象，就会发生歧义现象

于是，**我们引入JSX当中的双大括号机制，我们可以在对象外再添加一个大括号，即双大括号**

例如我们尝试在JSX当中编写内联样式
```JSX
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```
> 这里需要注意的一个点是：我们在编写内联style属性的时候，需要用小驼峰的形式编写，例如background-color需要更改为backgroundColor

现在你几乎了解了有关 JSX 的一切：

+ JSX 引号内的值会作为字符串传递给属性。
+ 大括号让你可以将 JavaScript 的逻辑和变量带入到标签中。
+ 它们会在 JSX 标签中的内容区域或紧随属性的 = 后起作用。
+ {{ 和 }} 并不是什么特殊的语法：它只是包在 JSX 大括号内的 JavaScript 对象。


## Props组件间传递数据
### 简介
在我们学习Vue的时候，Props是父组件向子组件传递数据的一个重要的方法，与Vue一样，React同样也是**单向数据流**，这意味着我们组件间的通信一般来说只能由父级传向子级，既然如此Props就显得非常之重要了

Props是我们传递给JSX标签的信息，例如一些className、src或者其他的一些属性，我们可以通过它们传递任何JavaScript值，包括对象、数组和函数等等

### 使用Props
首先我们定义一个父组件，这个父组件会将一些css属性相关的内容传递给子组件
```jsx
export default function myInfo() {
    return (
        <Avatar 
            person={{name: 'zhang san', imgUrl: '1234567.jpg'}}
            size={43}
        />
    )
}
```
随后我们再定义一个子组件，这个子组件此时可以接收到父组件传来的值，并加以设置为自己的属性
```jsx
function Avatar({person, size}) {
    return (
        <img 
            src={person.imgUrl}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

export default Avatar
```
这样我们通过参数项接收到父级传来的数据并设置为自己的css属性

> 这里需要注意的是，我们在函数的参数项通过解构的方式拿到出传来的属性，如果不使用解构的方式，也可以使用props拿到总的数据，在props中提取需要的内容即可

### 为prop指定一个默认值
如果你想在没有指定值的情况下给prop一个默认值，我们可以直接在参数的后面加上一个`=`和`默认值`来进行解构

以上面的例子为例，我们为size添加100的默认值：
```jsx
function Avatar({size = 100}) {
    return (
        <img 
            width={size}
            height={size}
        />
    )
}

export default Avatar
```
> 默认值仅仅在缺少size的prop或者是size={undefined}的时候生效，但是**如果传递了null或者是0，此时将会生效**

### 使用JSX展开语法传递props
有些时候，我们需要通过props传递的数据会非常非常多，并且很重复，此时我们依然可以使用解构的语法，但是有些时候大家会更加重视简洁性，于是我们可以使用“展开”的语法
```jsx
function Profile(props) {
    return (
        <div className="card">
            <Avatar {...props} />
        </div>
    )
}
```
这样就会将`Profile`的所有props转发到对应的子组件当中。尽管如此，我们还是不建议使用展开的语法去写~

### 将JSX作为子组件传递
在实际的业务开发中，我们会常常考虑将不同的组件进行嵌套，这个时候我们可以引入名为`children`的prop，我们可以通过这个prop来包裹一个子组件

下面来看一个完整的children的使用示例
```jsx
import Avatar from './Avatar'

function Card({children}) {
    return (
        <div>
            {children}
        </div>
    )
}

export default function Profile() {
    return (
        <Card>
            <!-- 这里放的就是children组件 -->
            <Avatar
                size={100}
                person={{
                    name: 'wlc',
                    imgUrl: '2345678.jpg'
                }}
            />
        </Card>
    )
}
```
> 可以将带有`children`prop的组件看作带有一个‘洞’，可以由其父组件使用任意JSX来“填充”