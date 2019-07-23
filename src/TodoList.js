import React, { Component, Fragment } from 'react'
import { Divider } from 'antd';
import { tsConstructorType, throwStatement } from '@babel/types';
import './style.css'
import TodoItem from "./TodoItem"

class TodoList extends Component {
	constructor(props) {
		console.log(props)
		super(props);
		this.state = {
			inputValue: '',
			list: [],
			value:'22'
		}
	}

	//在组件即将挂载到页面的时刻自动执行
	componentWillMount(){
		console.log('componentWillMount')
	}

	//组件被挂载到页面之后，自动被执行
	componentDidMount(){
		console.log('componentDidMount')
	}

	//当一个组件从父组件接受了参数
	//只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
	//如果这个组件第一次存在于父组件中，不会被指执行(上面这句话等同于这句话跟下一句话)
	//如果这个组件之前已经存在与父组件中，才会被执行
	componentWillReceiveProps(){
		console.log('child componentWillReceiveProps')
	}

	//组件被更新之前，他会自动被执行, return的值，true则是组件会更新，如果是return false则组件不会更新，后面的流程也不会再走了
	shouldComponentUpdate(){
		console.log("shouldComponentUpdate")
		return true
	}

	//在组件被更新之前，他会自动执行，但是他在shouldCompoent之后被执行
	//如果shouldComponentUpdate返回true才执行，返回false就不会执行
	componentWillUpdate(){
		console.log("componentWillUpdate")
	}

	//组件更新完成之后，会自动执行
	componentDidUpdate(){
		console.log("componentDidUpdate")
	}

	//当子组件要从页面被移除之前，会自动执行
	componentWillUnmount(){
		console.log("child componentWillUnmount")
	}
	render() {
		console.log('render')
		//Fragment说白了是个组件
		return (
			<Fragment>  
				{/* {下面是一个input框} */}
				{
					//下面是一个input框
				}
				<div>{this.state.value}</div>
				<label htmlFor="insertArea">输入内容</label>
				<input id="insertArea" className="input" value={this.state.inputValue}  onChange={this.chnageInput.bind(this)} onKeyUp={this.onKeyUp.bind(this)}></input>
				<button onClick={this.submit.bind(this)}>提交</button>

				<ul>
					{
						//dangerouslySetInnerHTML这个标签将不会自动转义标签的html元素
						// this.state.list.map((item, index) => {
						// 	return <li key={index} dangerouslySetInnerHTML={{__html:item}} onClick={this.delete.bind(this, index)}></li>
						// })
						this.state.list.map((item, index) => {
							return (
								<div key={index}>
									<TodoItem key={index} content={item} index={index} deleteItem={this.delete.bind(this, index)}/>
								</div>
							)
						})
					}
				</ul>
			</Fragment>
		)
	}
	chnageInput(e){
		console.log(this)
		this.setState({
			inputValue:e.target.value
		})
	}
	submit(a){
		this.setState({
			list:[...this.state.list, this.state.inputValue],
			inputValue:''
		})
		localStorage.setItem("list", [...this.state.list])
	}
	onKeyUp(e){
		if(e.keyCode === 13){
			this.submit()
		}
	}
	delete(index){
		//immutable
		//state 不允许我们做任何的改变  如果写成this.state.list.splice(index, 1)在做性能优化的时候就会有问题
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list:list,
			value:index
		})
		// console.log(index)
	}
}

export default TodoList;