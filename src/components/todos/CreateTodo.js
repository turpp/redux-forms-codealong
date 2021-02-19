import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {

  state={
    todo: ''
  }
  handleChange=(event)=>{
    this.setState({
      todo: event.target.value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.props.addTodo(this.state)
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input onChange={this.handleChange} name='todo' type="text" value={this.state.todo}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispathToProps = (dispatch) => {
  return {addTodo: (todo)=> dispatch({type: 'ADD_TODO', payload: todo})}
}


export default connect(null, mapDispathToProps)(CreateTodo);
