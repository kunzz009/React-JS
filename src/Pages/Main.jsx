import React, { useState } from 'react';
import "../Pages/Admin.css";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SolutionOutlined,
    FileTextOutlined,
    BarsOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const Main = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className='layout-admin'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => {
                        console.log('key')
                        navigate('/admin/' + e.key)
                    }}
                    items={[
                        {
                            key: 'dashboard',
                            icon: <BarsOutlined />,
                            label: 'Trang Chủ ',
                        },
                        {
                            key: 'manage',
                            icon: <SolutionOutlined />,
                            label: 'Quản lý chiến dịch',
                        },
                        {
                            key: 'question',
                            icon: <FileTextOutlined />,
                            label: 'Câu hỏi',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', flexDirection: 'row', }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '10px 8px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>

    );
};
export default Main;