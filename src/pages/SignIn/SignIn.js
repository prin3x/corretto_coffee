import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {Form, Input, Button, Col, Row, notification} from 'antd';
import {UserContext} from '../../context/UserContext';

const SignIn = () => {
  const [form] = Form.useForm();

  const {onFinish, onFinishFailed} = useContext(UserContext);

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className='layout'>
      <h1 className='heading-1'>Sign In</h1>
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
              name='username'
              label='Username'
              rules={[{required: true, message: 'Please input your username!'}]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='password'
              label='Password'
              rules={[{required: true, message: 'Please input the password'}]}
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

export default SignIn;
