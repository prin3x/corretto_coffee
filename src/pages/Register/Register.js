import React, {useState} from 'react';
import {Form, Input, Button, Col, Row, notification} from 'antd';
import './Register.style.scss';
import axios from '../../config/axios';

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    const {username, password, email} = values;
    axios
      .post('/api/users/register', {username, password, email})
      .then(res =>
        notification['success']({
          message: res.data.message,
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        })
      )
      .catch(err =>
        notification['error']({
          message: 'Username has been selected',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        })
      );
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className='layout'>
      <h1 className='heading-1'>REGISTER</h1>
      <Row justify='center'>
        <Col span={8}>
          <Form
            labelCol={{span: 8}}
            wrapperCol={{span: 12}}
            layout='horizontal'
            initialValues={{size: 'default'}}
            size='default'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={form}
          >
            <Form.Item
              hasFeedback
              name='username'
              label='Username'
              rules={[{required: true, message: 'Please input your username!'}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name='email'
              label='Email'
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                  type: 'email',
                },
              ]}
            >
              <Input type='email' />
            </Form.Item>
            <Form.Item
              hasFeedback
              name='password'
              label='Password'
              rules={[{required: true, message: 'Please input the password'}]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name='confirm'
              hasFeedback
              dependencies={['password']}
              label='Confirm Password'
              rules={[
                {required: true, message: 'Please confirm the password'},
                ({getFieldValue}) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "Confirm Password doesn't match password"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Row justify='center'>
              <Col span={6} style={{marginLeft: '4rem'}}>
                <Form.Item>
                  <Button block htmlType='submit' style={{marginLeft: '4rem'}}>
                    Submit
                  </Button>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Button block htmlType='button' onClick={onReset}>
                    Reset
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
