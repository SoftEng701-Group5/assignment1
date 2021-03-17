export default function TimerPlay(props) {

    const {play, setPlay, buttonStyle, divPlay, divPause} = props;
    return (
        <button className={buttonStyle} onClick={() => setPlay(!play)}>
            <div className={play ? divPause : divPlay}>
            </div>
        </button>
    );
}