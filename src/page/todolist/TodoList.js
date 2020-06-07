/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-expressions */
import React from 'react'
import AddTodo from './components/AddTodo'
import ShowTodo from './components/ShowTodo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addTodoAction, deleteTodoAction, toggleTodoAction } from '../../store/store'

import './TodoList.css'

class TodoList extends React.Component {

    componentDidMount() {
        console.log(this.context)
    }
    render() {
        return (
        	<div className='todoList'>
                <h1 style={{textAlign: 'center'}}>Todos</h1>
                <AddTodo {...this.props}/>
                <ShowTodo {...this.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: bindActionCreators(addTodoAction, dispatch),
        deleteTodo: bindActionCreators(deleteTodoAction, dispatch),
        toggleTodo: bindActionCreators(toggleTodoAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)