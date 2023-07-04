import { useEffect } from 'react';
import './Input.css'


export default function Input({turned, units, setUnits, unitsLimit, sign, unitsAccessKey}) {
    const handleInput = (value) => {
        if (isNaN(value) || parseInt(value) >= unitsLimit) {
            alert("Введите корректное значение!")
            document.getElementById("input-field-reset").value = 0;
            setUnits(0);
            localStorage.setItem(unitsAccessKey, 0);
        }
        else {
            setUnits(parseInt(value));
            localStorage.setItem(unitsAccessKey, value);
        }
    }

    const handleEmptyInput = (value) => {
        if (value.length < 1) {
            alert("Введите корректное значение!")
            document.getElementById("input-field-reset").value = 0;
            setUnits(0);
            localStorage.setItem(unitsAccessKey, 0);
        }
    }

    useEffect(() => {
        document.getElementById("input-field-reset").value = localStorage.getItem(unitsAccessKey) == null ? 0 : localStorage.getItem(unitsAccessKey);
    }, [])
    
    return (
        turned ?
        <div className='input-body'>
            <div className='input-text'>{units}</div>
            <div className='input-sign'>{sign}</div>
        </div>
        : 
        <div className='input-body'>
            <input id="input-field-reset" className="input-text" type="text" onBlur={(event) => {handleEmptyInput(event.target.value)}} onChange={(event) => {handleInput(event.target.value)}} name="name" />
            <div className='input-sign'>{sign}</div>
        </div>
    )
}
