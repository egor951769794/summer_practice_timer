import './Cube.css'

export default function Cube() {
    return (
        <div className='stage'>
            <div className="cube">
                <div className="back plane"></div>
                <div className="top plane"></div>
                <div className="bottom plane"></div>
                <div className="left plane"></div>
                <div className="right plane"></div>
                <div className="front plane"></div>
            </div>
        </div>
    )
}