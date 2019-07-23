import React from 'react';    //引入这个是为了jsx语法
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';

//jsx语法中，如果我们要使用我们自己创建的组件，必须大写字母开头
console.log(ReactDOM)
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
