// File: my-app/src/pages/Feng.js
import React, { Component } from 'react'
import { Col, Row, Input, Checkbox, Radio } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
// 引入样式
import './feng.css'

export default class Feng extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 初始化状态
      todos: [], // 用于存储待办事项
      newTodo: '', // 用于存储新待办事项的输入
      value3: 'All', // 单选框的初始值
      options: [
        { label: 'All', value: 'All', className: 'All-1' },
        { label: 'Active', value: 'Active', className: 'Active-2' },
        { label: 'Completed', value: 'Completed', title: 'Completed', className: 'Completed-3' },
      ]
    }
  }
  // 返回
  goBack = () => {
    this.props.history.goBack(); // 返回上一页
  }
  render() {
    const { todos, value3, options } = this.state; // 解构状态
    // 输入待办事项
    const onEnter = e => {
      const value = e.target.value.trim(); // 获取输入值并去除首尾空格
      if (value) {
        this.setState(prevState => ({
          todos: [...prevState.todos, { name: value, check: false }], // 添加新待办事项
          newTodo: '' // 清空输入框
        }));
      }
    };
    const onChange = e => {
      console.log(`checked = ${e.target.checked}`);
      // 这里可以添加逻辑来处理复选框的变化
    };
    // 删除待办事项
    const onRemove = (index) => {
      this.setState((prevState) => ({
        todos: prevState.todos.filter((_, i) => i !== index) // 删除待办事项
      }));
    };
    // 单选框变化
    const onChange3 = ({ target: { value } }) => {
      console.log('radio3 checked', value);
      this.setState({ value3: value });
    };
    // 清除已完成的待办事项
    const onclear = () => {
      this.state.todos = this.state.todos.filter(todo => !todo.check); // 过滤掉已完成的待办事项
      this.setState({ todos: this.state.todos }); // 更新状态
    }
    return (
      <>
        <p onClick={this.goBack}>返回</p>
        <div className='todoapp'>
          {/* 头部 */}
          <header className='header'>
            <h1>todos</h1>
            <Row>
              <Col span={24}>
                <Input className='new-todo' placeholder="What needs to be done?"
                  onPressEnter={onEnter}
                  onChange={(e) => this.setState({ newTodo: e.target.value })}
                  value={this.state.newTodo} // 绑定输入框的值
                />
              </Col>
            </Row>
          </header>
          {/* 内容 */}
          <section className='main'>
            <ul className='todo-list'>
              {
                todos && todos.map((todo, index) => (
                  <li key={index} className='todo'>
                    <div className='view'>
                      <Checkbox
                        className='todo_check'
                        checked={todo.check}
                        onChange={e => {
                          const checked = e.target.checked;
                          this.setState(prevState => {
                            const newTodos = [...prevState.todos];
                            newTodos[index].check = checked;
                            return { todos: newTodos };
                          });
                        }}
                      />
                      {/* 显示待办事项 */}
                      <label>
                        {todo.name}
                      </label>
                    </div>
                    <CloseOutlined className='' onClick={onRemove.bind(this, index)} />
                  </li>
                ))
              }
            </ul>
          </section>
          {/* 底部 */}
          <footer className='footer'>
            <div>
              <span className="todo-count"><strong>{todos.length}</strong>
                <span style={{ marginLeft: 8, }}>items left</span></span>
            </div>
            <div>
              <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
            </div>
            <div onClick={onclear}>
              {todos.length > 0 && <span className="clear-completed">Clear completed</span>}
            </div>
          </footer>
        </div>
      </>
    )
  }
}
