export default function PlaySound({url, loop, play}) {

    let audio = new Audio(url);
    const playAudio = () => {
        audio.play();
    }
    playAudio();

    return (
        <div className="audio-player">

        </div>
    )
}
