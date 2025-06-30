import { Component } from 'react'
import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import './App.css'
import Storage from './utils/storage.js'

const instance = Storage.getInstance();

class App extends Component {
  constructor(props) {
    super(props)
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || []

    this.state = {
      todos: savedTodos
    }
  }

  componentDidUpdate() {
    instance.setItem('todos', JSON.stringify(this.state.todos))
  }

  addTodo =(text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          completed: false
        }
      ]
        })

  }

  deleteTodo = (index) => {
    // focus 数据，不再理底层的API 
    const newTodos = [...this.state.todos]
    newTodos.splice(index, 1)
    this.setState({
      todos: newTodos
    })
  }

  toggleTodo = (index) => {
    const newTodos = [...this.state.todos]
    newTodos[index].completed = !newTodos[index].completed
    this.setState({
      todos: newTodos
    })
  }

  editTodo = (index, newText) => {
    const newTodos = [...this.state.todos]
    newTodos[index].text = newText
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-app">
        <h1 className="todo-app__title">Todo List</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          todos = {todos}
          toggleTodo = {this.toggleTodo}
          deleteTodo = {this.deleteTodo}
          editTodo = {this.editTodo}
        />
      </div>
    )
  }
}
export default App