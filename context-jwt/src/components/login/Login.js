import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Spin,
  message
} from 'antd';
import { login } from '../../auth/authentication';
import { LoadingOutlined } from '@ant-design/icons';
import './login.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = ({ history, setUser }) => {
  const [isLogging, setIsLogging] = useState(false);

  const handleLogin = async values => {
    setIsLogging(true);
    try {
      await login(values, setUser, history);
      setIsLogging(false);
    } catch (error) {
      console.log(error);
    };
  };

  const onFinishFailed = () => message.error('Submit failed!');

  return (
    <Card
      className='login-container'
      title={
        <img
          src='https://campus.rollingcodeschool.com/pluginfile.php/1/core_admin/logo/0x150/1602632262/logo2.png'
          alt='logo-rolling'
        />
      }
    >
      <Form
        {...layout}
        name="login"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {isLogging ? <Spin indicator={antIcon} /> : 'LOGIN'}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;