import { useEffect, useState } from "react";

export default function Timer({handler}) {

    

    handler();

    return (
        <div className="timer"></div>
    )
}