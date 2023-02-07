import React, { useState } from 'react';
import { Table } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SolutionOutlined,
    FileTextOutlined,
    BarsOutlined,
} from '@ant-design/icons';
import "../Pages/Admin.css";
import { Layout, Menu, theme } from 'antd';
import { Input, Space } from 'antd';
const { Header, Sider, Content } = Layout;

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
const onSearch = (value) => console.log(value);
const columns = [
    {
        title: 'Tên chiến dịch',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.date - b.date,
    },
    {
        title: 'Người tạo',
        dataIndex: 'user',
        filters: [
            {
                text: 'user1',
                value: 'user1',
            },
            {
                text: 'user2',
                value: 'user2',
            },
        ],
        onFilter: (value, record) => record.user.indexOf(value) === 0,
    },
    {
        title: 'Số Trang',
        dataIndex: 'page',

    },
    {
        title: 'Chức năng',
        dataIndex: '',
        key: 'x',
        render: () => <div><button> Delete </button> <button> Edit </button> <button>Question</button> <button> Public</button></div>,
    }
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        date: '02 / 01 / 2023',
        user: 'user1',
        page: '1',
    },
    {
        key: '2',
        name: 'Jim Green',
        date: '03 / 01 / 2023',
        user: 'user1',
        page: '2',
    },
    {
        key: '3',
        name: 'Joe Black',
        date: '01 / 01 / 2023',
        user: 'user2',
        page: '2',
    },
    {
        key: '4',
        name: 'Jim Red',
        date: '01 / 01 / 2023',
        user: 'user2',
        page: '1',
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};


function AdminPages() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className='layout-admin'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <h2> Trang chủ </h2>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <BarsOutlined />,
                            label: 'Trang Chủ ',
                        },
                        {
                            key: '2',
                            icon: <SolutionOutlined />,
                            label: 'Quản lý chiến dịch',
                        },
                        {
                            key: '3',
                            icon: <FileTextOutlined />,
                            label: 'Báo cáo ',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', flexDirection: 'row', }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    <h2> Danh sách chiến dịch </h2>
                    <div className='txt-search'>
                        <input class="txt-button" type="submit" value={"Thêm mới"} onClick />
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            suffix={suffix}
                            onSearch={onSearch}
                        />
                    </div>

                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Table columns={columns} dataSource={data} onChange={onChange} />
                </Content>
            </Layout>
        </Layout >
    );
};

export default AdminPages



