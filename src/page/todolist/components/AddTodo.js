import React from 'react';
import { Button } from 'antd'

class AddTodo extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    handleAddTextChange(e) {
        const { value: name } = e.target
        this.setState({ name })
    }

    clickToAddTodo() {
        const { name } = this.state
        this.props.addTodo(name)
    }

    render(){
        return (
            <div>
                <input
                    placeholder="输入待办项"
                    value={this.state.name}    
                    onChange = {this.handleAddTextChange.bind(this)}
                />
                <Button
                    type="primary"
                    onClick = {this.clickToAddTodo.bind(this)}
                >添加</Button>
            </div>
        )
    }
}

export default AddTodo 