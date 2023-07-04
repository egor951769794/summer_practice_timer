import './Panel.css'

import { useState, useEffect } from 'react';

import Input from '../Input/Input'
import Timer from '../Timer/Timer';

export default function Panel() {
    // localStorage.clear();
    const [turned, turn] = useState(localStorage.getItem("turned") == null ? false : localStorage.getItem("turned"));
    const [active, activate] = useState(localStorage.getItem("active") == null ? false : localStorage.getItem("active"));
    const [finished, finish] = useState(localStorage.getItem("finished") == null ? false : localStorage.getItem("finished"));
    const [totalTime, setTotalTime] = useState(0);
    const [minutes, setMinutes] = useState(localStorage.getItem("minutes") == null ? 0 : localStorage.getItem("minutes"));
    const [seconds, setSeconds] = useState(localStorage.getItem("seconds") == null ? 0 : localStorage.getItem("seconds"));

    useEffect(() => {
        localStorage.setItem("turned", turned)
    }, [turned]);

    useEffect(() => {
        localStorage.setItem("active", active)
    }, [active])


    const start = () => {
        turn(true);
        activate(true);
    }

    const stop = () => {
        activate(false);

    }

    const reset = () => {
        turn(false);
        activate(false);

        setMinutes(0);
        setSeconds(0);
        localStorage.setItem("minutes", 0);
        localStorage.setItem("seconds", 0);
    }

    const getTime = () => {
        return parseInt(minutes) * 60 + parseInt(seconds);
    }

    const useEffectTimer = () => {
        useEffect(() => {
            const interval = setInterval(() => {
                setSeconds(parseInt((getTime() - 1) % 60));
                localStorage.setItem("seconds", parseInt((getTime() % 60) - 1));
                setMinutes(parseInt((getTime() - 1) / 60));
                localStorage.setItem("minutes", parseInt(getTime() / 60));
            }, 1000 )
            return () => clearInterval(interval);
        })
    }

    if (localStorage.getItem("active") && active) {return (
        <div className='panel'>
            microwave timer
            <Timer handler={useEffectTimer} active={localStorage.getItem("active")}></Timer>
            <Input sign="sec" turned={turned} units={seconds} unitsAccessKey={"seconds"} setUnits={setSeconds} unitsLimit={60} id={0}></Input>
            <Input sign="min" turned={turned} units={minutes} unitsAccessKey={"minutes"} setUnits={setMinutes} unitsLimit={Infinity} id={1}></Input>
            <div onClick={() => start()}>start</div>
            <div onClick={() => stop()}>stop</div>
            <div onClick={() => reset()}>reset</div>
            <div onClick={() => {alert(localStorage.getItem("active")); alert(active)}}>get info</div>
        </div>
    )}
    else return (
        <div className='panel'>
            microwave timer
            <Input sign="sec" turned={turned} units={seconds} unitsAccessKey={"seconds"} setUnits={setSeconds} unitsLimit={60} id={0}></Input>
            <Input sign="min" turned={turned} units={minutes} unitsAccessKey={"minutes"} setUnits={setMinutes} unitsLimit={Infinity} id={1}></Input>
            <div onClick={() => start()}>start</div>
            <div onClick={() => stop()}>stop</div>
            <div onClick={() => reset()}>reset</div>
            <div onClick={() => {alert(localStorage.getItem("active")); alert(active)}}>get info</div>
        </div>
    )
}
