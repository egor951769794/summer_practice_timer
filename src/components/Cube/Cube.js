import './Cube.css'

export default function Cube({rotate}) {
    return (
        <div className='stage'>
            <div className={rotate? "cube rotating" : "cube"}>
                <div className="back plane"></div>
                <div className="top plane"></div>
                <div className="bottom plane"></div>
                <div className="left plane"></div>
                <div className="right plane"></div>
                <div className="front plane"></div>
                <div className="shadow plane"></div>
            </div>
        </div>
    )
}
