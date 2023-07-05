import './Panel.css'

import { useState, useEffect } from 'react';

import Input from '../Input/Input'
import Timer from '../Timer/Timer';
import Button from '../Button/Button';

export default function Panel({markAsFinished}) {
    const [turned, turn] = useState(localStorage.getItem("turned") == null ? false : localStorage.getItem("turned"));
    const [active, activate] = useState(localStorage.getItem("active") == null ? false : localStorage.getItem("active"));
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
        markAsFinished(false);
    }

    const finish = () => {
        activate(false);

        setMinutes(0);
        setSeconds(0);
        localStorage.setItem("minutes", 0);
        localStorage.setItem("seconds", 0);
        markAsFinished(true);
    }

    const getTime = () => {
        return parseInt(minutes) * 60 + parseInt(seconds);
    }

    // certified javascript moment
    let bool = (value) => {
        if (value === 'false') return false;
        else return value
    }
    
    const useEffectTimer = () => {
        useEffect(() => {
            if (bool(active)) {
            const interval = setInterval(() => {
                if (parseInt(getTime()) < 2) {
                    finish();
                    return () => {};
                }
                setSeconds(parseInt((getTime() - 1) % 60));
                localStorage.setItem("seconds", parseInt((getTime() % 60) - 1));
                setMinutes(parseInt((getTime() - 1) / 60));
                localStorage.setItem("minutes", parseInt(getTime() / 60));
            }, 1000 )
            return () => clearInterval(interval);
            }
            else return () => {};
        })
    }
    
    return (
        <div className='panel'>
            MICROWAVE TIMER
            <Timer handler={useEffectTimer} active={localStorage.getItem("active")}></Timer>
            <div className='panel-inputs'>
                <Input sign="sec" turned={turned} units={seconds} unitsAccessKey={"seconds"} setUnits={setSeconds} unitsLimit={60} id={0}></Input>
                <Input sign="min" turned={turned} units={minutes} unitsAccessKey={"minutes"} setUnits={setMinutes} unitsLimit={Infinity} id={1}></Input>
            </div>
            <div className='panel-buttons'>
                <Button handler={start} text="START" pressed={turned && active}></Button>
                <Button handler={stop} text="STOP" pressed={turned && !active}></Button>
                <Button handler={reset} text="RESET"></Button>
            </div>
        </div>
    )
}
