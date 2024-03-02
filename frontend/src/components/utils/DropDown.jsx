/* eslint-disable react/prop-types */
import { useState, useRef, forwardRef, useImperativeHandle } from 'react';

const DropDown = forwardRef(function DropDown({data}, ref) {

    const select = useRef(null);

    const [selected, setSelected] = useState(data[0]);
    const changeHandler = (e) => {
        // console.log(select.current.value);
        setSelected(e.target.value);
    }



    useImperativeHandle(ref, () => ({
        getSelectElement: () => {
            return select.current;
        }
    }));

    return (
        <div>
            <select ref={select} value={selected} onChange={changeHandler}>
                {data.map((item) => {
                    return <option key={item.id} value={item.id}>{item.name}</option>
                })}
            </select>
        </div>
    );
})

export default DropDown;