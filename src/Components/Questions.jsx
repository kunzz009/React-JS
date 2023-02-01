
import React, { useState } from 'react';

const Questions = () => {
    const [selectType, setSelectType] = useState("1")

    const onChangeSelect = (e) => {
        setSelectType(e.target.value)
    }

    const renderViewType = (e) => {
        switch (selectType) {
            case "1":
                return <input />;
            case "2":
                return null;
        }
    }

    return (
        <div>
            <div class="col-12 font-weight-bold mb-2"> Ý kiến đánh giá </div>
            <div class="col-12" >
                <input type="text" class="form-control" name="" id="" aria-describedby="" placeholder="" />
                <select class="form-control" name="" id="" onChange={onChangeSelect}>
                    <option value={"1"}> Trả lời ngắn </option>
                    <option value={"2"}> Đoạn </option>
                    <option value={"3"}> Trắc nghiệm </option>
                </select>
            </div>
            {renderViewType()}
        </div>
    )
}

export default Questions