import { useMutation } from "@apollo/client";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { LOGIN } from "./graphql/auth/auth";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const [doLogin] = useMutation(LOGIN);

  const onFinish = async ({ username, password }) => {
    try {
      const data = await doLogin({
        variables: {
          input: {
            identifier: username,
            password,
          },
        },
      });
      localStorage.setItem("jwt", data?.data?.login?.jwt);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card title="Login" style={{ width: 450 }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
