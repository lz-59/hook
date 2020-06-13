import React, { useState, useEffect } from 'react'
import { Layout, Menu, Table, Button } from 'antd'
import { connect } from 'react-redux';
import { UserOutlined } from '@ant-design/icons'
import { Modal } from '@@'

const { Header, Content, Footer, Sider } = Layout

function Home (props) {
  let [ visible, setVisible ] = useState(false)
  let [ users, setUsers ] = useState({})
  let [select, setSelect] = useState([])
  const { data } = props
  useEffect(() => {
    
  }, [])

  const handleOk = e => {
    console.log(e);
    setVisible(false)
  }

  const handleCancel = e => {
    setVisible(false)
  }

  const upd = item => {
    setUsers(item)
    setVisible(true)
  }

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    setSelect(selectedRowKeys)
  };

  const { selectedRowKeys } = select
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          })
          setSelect(newSelectedRowKeys) 
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          })
          setSelect(newSelectedRowKeys)
        },
      },
    ],
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'uid',
    },
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '密码',
      dataIndex: 'password',
    },
    {
      title: '权限',
      dataIndex: 'roleid',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '操作',
      render: item => {
        return (
          <span>
            <Button onClick={() => upd(item)}>修改</Button>
            <Button>删除</Button>
          </span>
        )
      }
    }
  ]

  return (
    <div className="home-box">
      <Modal 
        users={users}
        visible={visible} 
        handleOk={handleOk} 
        handleCancel={handleCancel} 
      />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {}}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Table rowKey={v => v.uid} rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default connect(state => ({
  data: state.home.data
}))(Home)