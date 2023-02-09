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
const Dashboard = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <span>Dashboard</span>
    );
};
export default Dashboard;