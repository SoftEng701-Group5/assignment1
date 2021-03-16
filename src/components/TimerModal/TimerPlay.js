export default function TimerPlay({play, setPlay, buttonStyle, divPlay, divPause}) {

    return (
        <button className={buttonStyle} onClick={() => setPlay(!play)}>
            <div className={play ? divPause : divPlay}>
            </div>
        </button>
    );
}