import React, { Component } from 'react'
import { Col, Row, Rate, Button } from 'antd';
import { Link } from 'react-router-dom';
// 引入样式
import './home.css'
// 引入组件
import FromAdd from '../../componetns/from_add/index.js';
const style = {
  background: '#cccc', padding: '8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',

};

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 初始化状态
      data: [],
      editItem: null, // 新增或编辑的项
    }
  }
  // 模拟加载数据
  componentDidMount() {

  }
  // 
  onEmitFrom = (values) => {
    // 更新状态
    console.log('提交的值', values);
    if (this.state.editItem) {
      this.setState((prevState) => ({
        data: prevState.data.map(d => {
          // 如果是编辑状态，更新对应的项
          return d.id === prevState.editItem.id
            ? {
              ...d,
              name: values.username,
              phone: values.phone,
              score: values.score,
              selectedDate: values.selectedDate,
              textArea: values.textArea,
            }
            : d;
        }),
        editItem: null, // 提交后清空编辑项
      }));
    } else {
      this.setState((prevState) => {
        return {
          data: [
            ...prevState.data,
            {
              id: prevState.data.length + 1,
              name: values.username,
              phone: values.phone,
              score: values.score,
              selectedDate: values.selectedDate,
              textArea: values.textArea,
            }
          ]
        }
      })
    }
  }
  // 编辑按钮点击事件
  onEdit = (e) => {
    // 这里可以添加编辑逻辑
    this.setState({ editItem: e });
  }
  // 删除按钮点击事件
  onRemove = (e) => {
    // 这里可以添加删除逻辑
    this.setState((prevState) => ({
      data: prevState.data.filter(item => item.id !== e.id),
      editItem: null, // 删除后清空编辑项
    }));
  }

  render() {
    const { data, editItem } = this.state
    return (
      <>
        {/* 表单部分 */}
        <div className='form'>
          <h2>添加联系人</h2>
          <Link to="/Feng" state={{ data: 123 }}>跳转关于页面</Link>
          <FromAdd onValuesChange={this.onEmitFrom} editItem={editItem} />
        </div>
        {/* 展示部分 */}
        {
          <Row gutter={16}>
            {
              data && data.map((item) => (
                <Col className="gutter-row" span={6} key={item.id}>
                  <div style={style}>
                    <div>
                      <p className='h_name'>姓名: {item.name}</p>
                      <p>电话: {item.phone}</p>
                      <div>评分:
                        <Rate
                          value={item.score}
                          disabled
                          onChange={(e) => e.target.value}
                        />
                      </div>
                      <div>评论时间：{item.selectedDate}</div>
                      <div>评论：{item.textArea}</div>
                    </div>
                    <div>
                      <div>
                        <Button color="danger" variant="outlined" size='middle'
                          onClick={() => this.onEdit(item)} >
                          编辑
                        </Button>
                        <Button color="danger" variant="solid" size='middle'
                          onClick={() => this.onRemove(item)} >
                          删除
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>
        }
      </>

    )
  }
}
