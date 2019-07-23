import React, {Component} from 'react'

class TodoItem extends Component{
    constructor(props){
			super(props)
			this.handlerClick = this.handlerClick.bind(this)
		}
    render () {
				const {content} = this.props
        return (
            <div onClick={this.handlerClick}>{this.props.content}</div>
        )
		}
		
		handlerClick(){
			const {deleteItem, index} = this.props
			deleteItem(index)
			// this.props.deleteItem(this.props.index)
		}
}

export default TodoItem;