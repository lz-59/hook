import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginData } from '@/actions/login'
import { defaultData } from '@/actions/home'
import './styles.less'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

function Login (props) {
    const { loginData, token, userData, defaultData } = props
    const onFinish = values => {
      loginData(values)
    }
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo)
    }

    useEffect(() => {
      if(token) {
        const { username, password } = userData
        defaultData({ username, password, token })
        props.history.push('/home')
      }
    }, [token])

    return (
      <div>
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
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Link to="/reg">去注册</Link>
          </Form.Item>
        </Form>
      </div>
    )
}

export default connect(state => ({
  token: state.login.token,
  userData: state.login.userData,
}),{
  loginData,
  defaultData,
})(Login)