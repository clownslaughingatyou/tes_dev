// File: my-app/src/pages/Feng.js
import React, { Component } from 'react'


export default class Feng extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 初始化状态
    }
  }
  // 返回
  goBack = () => {
    this.props.history.goBack(); // 返回上一页
  }
  render() {
    return (
      <>
        <p onClick={this.goBack}>返回</p>
        <div style={{ padding: 20 }}>
          <h1>统计页面</h1>
          <p>这里是统计页面的内容。</p>
          {/* 可以添加更多的统计图表或数据展示 */}
        </div>
      </>
    )
  }
}
