import './Background.css'

export default function Background({isOver=false}) {
    return (
        <div className={isOver? 'bg red' : 'bg green'}></div>
    )
}
