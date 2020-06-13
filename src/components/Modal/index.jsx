import React, { useState } from 'react'
import { Modal, Form, Input } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const onFinish = values => {
  console.log('Success:', values);
}

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
}

export default function Modals (props) {
  const { handleOk, handleCancel, visible, users } = props
  return (
    <div>
      <Modal
          title="修改"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
           
            {
              Object.entries(users).map((i, k) => {
                if(i[0] !== 'uid'){
                  return (
                    <span key={k}>
                       <Form.Item
                        label={i[0]}
                        name={i[0]}
                        rules={[{ required: true, message: `请输入${i[0]}` }]}
                      >
                        <Input />
                      </Form.Item>
                    </span>
                  )
                }
              })
            }
          </Form>
        </Modal>
    </div>
  )
}
