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

const { Header, Sider, Content } = Layout;
const App = () => {
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
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;