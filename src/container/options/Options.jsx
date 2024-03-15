import { useState, useRef } from "react";
import style from './Options.module.css';

function Options(type){
    const [options, setOptions] = useState({type: type.type, value: ''});
    const acceptedValue = useRef();
    const labelValue = useRef();

    function handleChange(event) {
        setOptions(o => ({...o, value: event.target.value}));
    }

    function acceptOption(){
        if (acceptedValue.current.value !== ''){
            acceptedValue.current.style.display = 'none';
        }
        else {
            acceptedValue.current.style.display = 'inline-block';
        }
    }

    function rejectOption(){
        acceptedValue.current.style.display = 'inline-block';
        acceptedValue.current.value = '';
        labelValue.current.value = '';
    }

    return(
        <div className={style.options}>
            <input className={style.radio} type={options.type} /> 
            <input ref={acceptedValue} className={style.textbox} type="text" onChange={() => handleChange(event)} />
            <label ref={labelValue}>{options.value}</label>
            <button className={style.button_a} onClick={acceptOption}>✅</button>
            <button className={style.button_r} onClick={rejectOption}>❎</button>
        </div>
    );

}
export default Options;