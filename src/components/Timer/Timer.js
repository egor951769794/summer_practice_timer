import { useEffect, useState } from "react";

export default function Timer({handler}) {
    const [turned, turn] = useState(false);
    const [active, activate] = useState(false);
    const [finished, finish] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    handler();

    return (
        <div className="timer">
            
        </div>
    )
}