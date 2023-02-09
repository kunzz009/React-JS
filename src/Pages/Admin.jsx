import React, { useState } from 'react';
import { Table } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
// import { useNavigate, Routes, Route, Outlet } from 'react-router-dom'
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
        // filters: [
        //     {
        //         text: 'Joe',
        //         value: 'Joe',
        //     },
        //     {
        //         text: 'Jim',
        //         value: 'Jim',
        //     },
        //     {
        //         text: 'Submenu',
        //         value: 'Submenu',
        //         children: [
        //             {
        //                 text: 'Green',
        //                 value: 'Green',
        //             },
        //             {
        //                 text: 'Black',
        //                 value: 'Black',
        //             },
        //         ],
        //     },
        // ],
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
        render: () =>
            <div>
                <button> Delete </button>
                <button> Edit </button>
                <button> Question </button>
                <button> Public </button>
            </div>,
    }
];
const data = [
    {
        key: '1',
        name: 'Feedback khách hàng vip',
        date: '02 / 01 / 2023',
        user: 'user1',
        page: '1',
    },
    {
        key: '2',
        name: 'Feedback khách hàng doanh nghiệp',
        date: '03 / 01 / 2023',
        user: 'user1',
        page: '2',
    },
    {
        key: '3',
        name: 'Feedback khách hàng cá nhân',
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

const AdminPages = () => (
<Space direction="vertical">
    <Search
    placeholder="input search text"
    enterButton="Search"
    size="large"
    suffix={suffix}
    onSearch={onSearch}
  />
</Space>

<Table columns={columns} dataSource={data} onChange={onChange} />
)


// function AdminPages() {


//     return (
//         // <h2> Danh sách chiến dịch </h2>
//         // <div className='txt-search'>
//         //     <input class="txt-button" type="submit" value={"Thêm mới"} onClick />
//         <Search
//             placeholder="input search text"
//             enterButton="Search"
//             size="large"
//             suffix={suffix}
//             onSearch={onSearch}
//         />

//         // <Table columns={columns} dataSource={data} onChange={onChange} />

//     );
// };


export default AdminPages;



