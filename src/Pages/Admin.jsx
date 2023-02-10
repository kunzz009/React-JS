import React, { useState } from 'react';
import { Input, Space, Button, Modal, Form, Checkbox, Table } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

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
// const [isModalOpen, setIsModalOpen] = useState({});
// const showModal = () => {
//     setIsModalOpen(true);
// };
// const handleOk = () => {
//     setIsModalOpen(false);
// };
// const handleCancel = () => {
//     setIsModalOpen(false);
// };

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

const AdminPages = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const columns = [
        {
            title: 'Tên chiến dịch',
            dataIndex: 'name',

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
            title: 'Trạng thái ',
            dataIndex: '',
            key: '',
            render: () => <Checkbox onChange={onChange} style={{}}></Checkbox>

        },
        {
            title: 'Chức năng',
            dataIndex: '',
            key: 'x',
            render: () =>
                <div>
                    {/* <Button type="primary" onClick={showModal}>
                        Delete
                    </Button>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal> */}
                    <Button type="primary">Delete </Button>
                    <Button type="primary" onClick={() => {

                        setOpen(true)
                    }}>Edit </Button>
                    <Button type="primary">Question </Button>
                    <Button type="primary">Public </Button>
                </div>,
        }
    ];
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'vertical'
            ? {
                labelCol: {
                    span: 6,
                },
                wrapperCol: {
                    span: 20,
                },
            }
            : null;
    // const buttonItemLayout =
    //     formLayout === 'vertical'
    //         ? {
    //             wrapperCol: {
    //                 span: 20,
    //                 offset: 4,
    //             },
    //         }
    //         : null;

    return (
        <div>
            <div className='txt-search'>
                <h2> Danh sách chiến dịch </h2>
                {/* <input class="txt-button" type="submit" value={"Thêm mới"} onClick={togglePopup} /> */}
                <Button type="primary" onClick={showModal}> Thêm mới </Button>
                <Modal
                    open={open}
                    title="Thêm chiến dịch "
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Hủy
                        </Button>,
                        <Button
                            key="Lưu"
                            type="primary"
                            loading={loading}
                            onClick={handleOk}
                        >
                            Submit
                        </Button>,
                    ]}
                >
                    <Form
                        {...formItemLayout}
                        layout={formLayout}
                        form={form}
                        initialValues={{
                            layout: formLayout,
                        }}
                        onValuesChange={onFormLayoutChange}
                        style={{
                            maxWidth: 600,
                        }}
                    >
                        <Form.Item label="Tên Chiến Dịch ">
                            <Input placeholder="Tên chiến dịch " />
                        </Form.Item>
                        <Form.Item label="Số trang" required tooltip="Điền số">
                            <Input placeholder="Số Trang " />
                        </Form.Item>
                    </Form>
                </Modal>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    suffix={suffix}
                    onSearch={onSearch}
                />
            </div>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    );
}

export default AdminPages;



