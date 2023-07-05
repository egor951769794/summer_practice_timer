import { useEffect } from 'react';
import './Input.css'


export default function Input({turned, units, setUnits, unitsLimit, sign, unitsAccessKey, id}) {
    const handleInput = (value) => {
        if (isNaN(value) || parseInt(value) >= unitsLimit) {
            alert("Введите корректное значение!")
            document.getElementById("input-field-reset" + id.toString()).value = "00";
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
            document.getElementById("input-field-reset" + id.toString()).value = 0;
            setUnits(0);
            localStorage.setItem(unitsAccessKey, 0);
        }
    }

    useEffect(() => {
        if (document.getElementById("input-field-reset" + id.toString()) != null) {
            document.getElementById("input-field-reset" + id.toString()).value = localStorage.getItem(unitsAccessKey) == null ? 0 : localStorage.getItem(unitsAccessKey);
        }
    }, [])

    if (units.toString().length < 2) units = '0' + units.toString();
    
    return (
        turned ?
        <div className='input-body'>
            <input id={"input-field-reset" + id.toString()} placeholder="00" disabled={true} value={units} className="input-text input-text-input" type="text" onBlur={(event) => {handleEmptyInput(event.target.value)}} onChange={(event) => {handleInput(event.target.value)}} name="name" />
            <div className='input-sign'>{sign}</div>
        </div>
        : 
        <div className='input-body'>
            <input id={"input-field-reset" + id.toString()} placeholder="00" value={units} className="input-text input-text-input" type="text" onBlur={(event) => {handleEmptyInput(event.target.value)}} onChange={(event) => {handleInput(event.target.value)}} name="name" />
            <div className='input-sign'>{sign}</div>
        </div>
    )
}
