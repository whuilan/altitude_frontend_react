import React from 'react';
import store from '../../store/store'

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleStatusChange = this.handleStatusChange.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    handleStatusChange(index){
        let action = { type: 'TOGGLE_TODO', index}
        store.dispatch(action)
    }

    onDeleteClick(index) {
        let action = { type: 'DELETE_TODO', index}
        store.dispatch(action)
    }

    render(){
        const { todo: { status, name }, index } = this.props
        return (
            <li>
                <input type="checkbox"
                       checked={status}
                       onChange={() => this.handleStatusChange(index)}
                  />
                  {status ? 
                    <span style = {{textDecorationLine: 'line-through'}}>{name}</span>
                    : name
                  }
                  <button onClick={(e) => this.onDeleteClick(index)}>删除</button>
            </li>
        )
    }
}

export default TodoItem