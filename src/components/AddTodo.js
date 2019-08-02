/**
 * Created by Hitesh on 02-Aug-19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state={
        title:''
    }

    onChange=(e)=>this.setState({[e.target.name]: e.target.value});
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({Title:''});
    }
    render() {
        return (
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add Todo..." style={{flex:'10'}} value={this.state.title} onChange={this.onChange}/>
                <input type="Submit" value="Submit" className="btn" style={{flex: '1'}}/>
            </form>
        )
    };
}

AddTodo.propTypes={
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default AddTodo;
