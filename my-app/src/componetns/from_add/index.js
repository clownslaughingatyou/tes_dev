import React, { useState, useEffect } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Rate,
  message,
} from 'antd';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const FromAdd = ({ onValuesChange, editItem }) => {
   const [messageApi] = message.useMessage();
  // 定义表单布局
  // 定义表表单状态
  const [formState, setFormState] = useState({
    username: '',
    phone: '',
    score: '',
    picker: '',
    textArea: '',
  })
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  // 提交表单
  const onFinish = (values) => {
    onValuesChange(values);
    if (editItem) {
      messageApi.open({
        type: 'success',
        content: '编辑成功',
      });
    }

    // 清空表单
    form.resetFields();
  };
  // 回显表单
  useEffect(() => {
    if (editItem) {
      form.setFieldsValue({
        id: editItem.id,
        username: editItem.name,
        phone: editItem.phone,
        score: editItem.score,
        textArea: editItem.textArea,
      });
    } else {
      form.resetFields();
    }
  }, [editItem, form]);
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'outlined'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'outlined' }}
      onFinish={onFinish}
    >


      <Form.Item label="姓名" name="username" rules={[{ required: true, message: 'Please username!' }]}>
        <Input
          value={formState.username}
          onChange={(e) => setFormState({ ...formState, username: e.target.value })}
          placeholder="请输入姓名"
          type='text'
        />
      </Form.Item>

      <Form.Item
        label="电话"
        name="phone"
      >
        <Input style={{ width: '100%' }}
          type='text'
          value={formState.phone}
          onChange={(value) => setFormState({ ...formState, phone: value })}
          placeholder="请输入电话"
        />
      </Form.Item>

      <Form.Item
        label="评分"
        name="score"
      >
        <Rate
          value={formState.score}
          onChange={(value) => setFormState({ ...formState, score: value })}
          style={{ fontSize: 24 }}
          allowHalf
        />
      </Form.Item>

      <Form.Item
        label="时间选择"
        name="picker"
      >
        <RangePicker
          key={formState.picker}
          value={formState.picker}
          onChange={(value) => setFormState({ ...formState, picker: value })}
          style={{ width: '100%' }}
          placeholder={['开始时间', '结束时间']}
          format="YYYY-MM-DD"
        />
      </Form.Item>

      <Form.Item
        label="简介"
        name="textArea"
      >
        <Input.TextArea
          value={formState.textArea}
          onChange={(e) => setFormState({ ...formState, textArea: e.target.value })}
          placeholder="请输入简介"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FromAdd;