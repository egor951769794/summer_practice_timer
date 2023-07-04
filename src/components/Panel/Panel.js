import './Panel.css'

import { useState, useEffect } from 'react';

import Input from '../Input/Input'
import Timer from '../Timer/Timer';

export default function Panel() {
    const [turned, turn] = useState(localStorage.getItem("turned") == null ? false : localStorage.getItem("turned"));
    const [active, activate] = useState(localStorage.getItem("active") == null ? false : localStorage.getItem("active"));
    const [finished, finish] = useState(localStorage.getItem("finished") == null ? false : localStorage.getItem("finished"));
    const [totalTime, setTotalTime] = useState(0);
    const [minutes, setMinutes] = useState(localStorage.getItem("minutes") == null ? 0 : localStorage.getItem("minutes"));
    const [seconds, setSeconds] = useState(localStorage.getItem("seconds") == null ? 0 : localStorage.getItem("seconds"));


    const getTime = () => {
        return parseInt(minutes) * 60 + parseInt(seconds);
    }

    const useEffectTimer = () => {
        useEffect(() => {
            const interval = setInterval(() => {
                setSeconds(parseInt((getTime() % 60) - 1));
                setMinutes(parseInt(getTime() / 60));
            }, 1000 )
            return () => clearInterval(interval);
        })
    }

    return (
        <div className='panel'>
            microwave timer
            {active ? <Timer handler={useEffectTimer}></Timer> : null}
            <Input sign="sec" turned={turned} units={seconds} unitsAccessKey={"seconds"} setUnits={setSeconds} unitsLimit={60}></Input>
            <div onClick={() => {turn(true); activate(true);}}>start</div>
            <div onClick={() => {activate(false);}}>stop</div>
            <div onClick={() => {turn(false); activate(false);}}>reset</div>
        </div>
    )
}