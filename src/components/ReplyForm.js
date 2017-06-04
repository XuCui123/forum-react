import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class ReplyForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
        this.props.form.resetFields();
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('content', {
            rules: [{ required: true, message: 'Please input content!' }],
          })(
            <Input type="textarea" rows={6} placeholder="这里填写内容" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            评论
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(ReplyForm);
