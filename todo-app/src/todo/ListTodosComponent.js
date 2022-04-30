import React, { Component } from 'react'
import TodoDataService from '../../src/api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'
import moment from 'moment'

class ListTodosComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      message: null
    }

    this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
    this.updateTodoClicked = this.updateTodoClicked.bind(this)
    this.addTodoClicked = this.addTodoClicked.bind(this)
    this.refrestTodos = this.refrestTodos.bind(this)
  }

  componentWillUnmount() {
    console.log('Component Will Unmount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log(nextProps)
    console.log(nextState)
    return true
  }

  componentDidMount() {
    console.log('Component Did Mount')
    this.refrestTodos()
    console.log(this.state)
  }

  refrestTodos() {
    let username = AuthenticationService.getLoggedInUserName()
    TodoDataService.retriveAllTodos(username).then(response => {
      this.setState({ todos: response.data })
    })
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName()
    TodoDataService.deleteTodo(username, id).then(response => {
      this.setState({ message: `Delete of todo ${id} Successful` })
      this.refrestTodos()
    })
  }

  addTodoClicked(id) {
    this.props.history.push(`/todos/-1`)
  }

  updateTodoClicked(id) {
    console.log('update' + id)
    this.props.history.push(`/todos/${id}`)

    // let username = AuthenticationService.getLoggedInUserName()
    // TodoDataService.deleteTodo(username, id).then(response => {
    //   this.setState({ message: `Delete of todo ${id} Successful` })
    //   this.refrestTodos()
    // })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.state.message && <div class='alert alert-success'>{this.state.message}</div>}
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completed?</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                  <td>{todo.done.toString()}</td>
                  <td>
                    <button className='btn btn-success' onClick={() => this.updateTodoClicked(todo.id)}>
                      Update
                    </button>
                  </td>
                  <td>
                    <button className='btn btn-warning' onClick={() => this.deleteTodoClicked(todo.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='row'>
            <button className='btn btn-success' onClick={this.addTodoClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ListTodosComponent
