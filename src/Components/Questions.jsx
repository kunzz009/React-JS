
import React, { useState } from 'react';
import "../Components/Questions.css"

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

//add question
const FormQuesion = () => {

}

const Questions = () => {
    const [selectType, setSelectType] = useState("1")

    const onChangeSelect = (e) => {
        setSelectType(e.target.value)
    }

    const renderViewType = () => {
        switch (selectType) {
            case "1":
                return (
                    <textarea type="text" class="form-control" name="" id="" rows="4" placeholder="Câu Trả lời" ></textarea>
                )
            case "2":
                return <FormRadio />
            case "3":
                return <FormCheckbox />
        }
    }

    return (
        <div class="col-12 font-weight-bold mb-2 container" > Tạo Ý Kiến Đánh Giá
            <div class="frame">
                <div class="context" style={{ display: 'flex', marginRight: '8px' }} >
                    <input type="text" class="form-control" aria-describedby="" placeholder="Câu hỏi" style={{ display: 'flex', flex: 1, marginRight: 10 }} />
                    <select class="form-control" onChange={onChangeSelect} style={{ display: 'flex', flex: 1, marginTop: '8px' }}>
                        <option value={"1"}> Đoạn văn </option>
                        <option value={"2"}> Tích chọn </option>
                        <option value={"3"}> Hộp kiểm  </option>
                    </select>
                </div>

                {renderViewType()}

            </div>
            <div>
                <input class="txt-button" type="submit" value={"Lưu"} onClick />
                <input type="submit" value={"Thêm câu hỏi "} />
            </div>

        </div>
    )
}

export default Questions