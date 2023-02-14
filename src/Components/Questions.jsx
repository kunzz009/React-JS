
import React, { useEffect, useState } from 'react';
import "../Components/Questions.css"
import { FrownOutlined, MehOutlined, SmileOutlined, } from '@ant-design/icons';
import { Rate } from 'antd';


const FormRadio = () => {
    const [listRadio, setListRadio] = useState([])
    const addRadio = () => {
        let list = Object.assign(listRadio, [])
        list.push({
            value: list.length + 1,
            title: ''
        })
        setListRadio([...list])
    }

    const deleteRadio = (index) => (e) => {
        let list = Object.assign(listRadio, [])
        list.splice(index, 1)
        console.log(list)
        setListRadio([...list])
    }

    const onChangeTitleRadio = (index) => (e) => {
        let list = Object.assign(listRadio, [])
        list[index].title = e.target.value
        setListRadio([...list])
    }

    return <div>
        <fieldset id="group1">
            {listRadio.map((item, index) => {
                return <div style={{ display: 'flex', flexDirection: "row" }}>
                    <input type="radio" key={index} name="group1"
                        value={item.value} />
                    <input value={item.title} onChange={onChangeTitleRadio(index)} placeholder="Câu trả lời" style={{ width: "85%" }} />
                    <input type="submit" value={"Xóa"} onClick={deleteRadio(index)} />
                </div>
            })}
        </fieldset>

        <button onClick={addRadio}>Them lua chon</button>
        {/* <button onClick={ }>Xóa</button> */}
    </div>
}

//checkbox
const FormCheckbox = () => {
    const [listCheckbox, setCheckbox] = useState([])
    const addCheckbox = () => {
        let list = Object.assign(listCheckbox, [])
        list.push({
            value: list.length + 1,
            title: ''
        })
        setCheckbox([...list])
    }

    const deleteCheckbox = (index) => (e) => {
        let list = Object.assign(listCheckbox, [])
        list.splice(index, 1)
        console.log(list)
        setCheckbox([...list])
    }

    const onChangeTitleCheckbox = (index) => (e) => {
        let list = Object.assign(listCheckbox, [])
        list[index].title = e.target.value
        setCheckbox([...list])
    }

    return <div>
        <fieldset id="group1">
            {listCheckbox.map((item, index) => {
                return <div style={{ display: 'flex', flexDirection: "row" }}>
                    <input type="checkbox" key={index} name="group1"
                        value={item.value} />
                    <input value={item.title} onChange={onChangeTitleCheckbox(index)} placeholder="Câu Trả lời" style={{ width: "85%" }} />
                    <input type="submit" value={"Xóa"} onClick={deleteCheckbox(index)} />
                </div>
            })}
        </fieldset>

        <button onClick={addCheckbox}>Them lua chon</button>
    </div>
}

const SatisfactionLevel = () => {
    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    };
    return (
        <div>
            <Rate allowHalf defaultValue={2.5} />
            {/* <br />
            <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} /> */}
        </div>
    )
}

const Questions = () => {
    const [selectType, setSelectType] = useState("1");
    const [addQuestionView, setAddQuestionView] = useState([]);

    const onChangeSelect = (e, id) => {
        setSelectType({
            type: e.target.value,
            questionID: id
        })
    }

    useEffect(() => {
        if (selectType) {
            var arrTem = []
            console.log(addQuestionView)
            addQuestionView.forEach((value) => {
                console.log(value, selectType.questionID)
                if (value.id === selectType.questionID) {
                    arrTem.push({
                        ...value,
                        type: selectType.type
                    })
                } else {
                    arrTem.push(value)
                }
            })
            console.log(arrTem)
            setAddQuestionView(arrTem)
        }
    }, [selectType])


    const renderViewType = (id, type) => {
        if (type === "1") {
            return (
                <textarea type="text" class="form-control" name="" id="" rows="4" placeholder="Câu Trả lời" ></textarea>
            )
        }

        if (type === "2") {
            return (
                <FormRadio />
            )
        }

        if (type === "3") {
            return (
                <FormCheckbox />
            )
        }
        if (type === "4") {
            return (
                <SatisfactionLevel />
            )
        }
    }

    const saveFeedBack = () => {
        window.location.href = "/admin/feedback";
    }

    const deleteView = (id) => (e) => {
        let list = Object.assign([], addQuestionView)
        let selectedItem = list.filter((a) => {
            return a.id + '' === id + ''
        })[0]
        console.log(selectedItem)

        let index = list.indexOf(selectedItem)
        list.splice(index, 1)
        setAddQuestionView([...list])
    }

    const handleClick = () => {
        var id = new Date().getTime()
        var arrTemp = []
        addQuestionView.forEach((value) => arrTemp.push(value))
        arrTemp.push({
            id: id,
            type: '1'
        })
        console.log(arrTemp)
        setAddQuestionView(arrTemp)
    };

    return (
        <div class="col-12 font-weight-bold mb-2 container" > Tạo Ý Kiến Đánh Giá
            {addQuestionView.map((line, index) => (
                <div key={index} class="frame" >
                    <div>
                        {/* <h1>{id}</h1> */}
                        <div class="context" style={{ display: 'flex', marginRight: '8px' }} >
                            <input type="text" class="form-control" aria-describedby="" placeholder="Câu hỏi" style={{ display: 'flex', flex: 1, marginRight: 10 }} value={line.id} />
                            <select class="form-control" onChange={(e) => onChangeSelect(e, line.id)} style={{ display: 'flex', flex: 1, marginTop: '8px' }}>
                                <option value={"1"}> Đoạn văn </option>
                                <option value={"2"}> Tích chọn </option>
                                <option value={"3"}> Hộp kiểm  </option>
                                <option value={"4"} > Mức độ hài lòng </option>
                            </select>
                            <input type="submit" value={"Xóa"} onClick={deleteView(line.id)} />
                        </div>
                    </div>
                    {renderViewType(line.id, line.type)}
                </div>
            ))}
            <div>
                <input class="txt-button" type="submit" value={"Lưu"} onClick={saveFeedBack} />
                <input class="txt-button" type="submit" value={"Thêm câu hỏi"} onClick={handleClick} />
            </div>

        </div>
    )
}

export default Questions