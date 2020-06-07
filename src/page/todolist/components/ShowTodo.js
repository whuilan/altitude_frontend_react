import React from 'react';
import TodoItem from './TodoItem';

class ShowTodo extends React.Component{
    render(){
        const { todos } = this.props;
        // const todos = store.getState();
        const items = todos.map((todo, index) => {
            return <TodoItem
                        todo = {todo}
                        index = {index}
                        key = {index}
                    />
        })

        const finishedTodos = todos.filter((item) => {
            return item.status;
        })

        return (
            <div>
                <ol>{items}</ol>
                <p>{`任务进度：${finishedTodos.length} / ${todos.length}`}</p>
            </div>
        )
    }
}

export default ShowTodo