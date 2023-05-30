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
