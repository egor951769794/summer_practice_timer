import './Button.css'

export default function Button({handler, text, pressed}) {
    return (
        <div onClick={() => handler()} className={pressed ? 'button-body pressed' : 'button-body'}>
            <div className='button-text'>{text}</div>
        </div>
    )
}
