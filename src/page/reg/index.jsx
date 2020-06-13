import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { regData } from '@/actions/reg'
import './styles.less'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

function Reg (props) {
    const { regData, code } = props
    const onFinish = values => {
      regData(values)
    }
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo)
    }

    useEffect(() => {
      if(code === 200) {
        props.history.push('/')
      }
    }, [code])

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
              注册
            </Button>
            <Link to="/">去登录</Link>
          </Form.Item>
        </Form>
      </div>
    )
}

export default connect(state => ({
  code: state.reg.code
}),{
  regData,
})(Reg)