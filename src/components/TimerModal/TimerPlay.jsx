export default function TimerPlay(props) {

    const {play, setPlay} = props;
    return (
        <button className="button-play" onClick={() => setPlay(!play)}>
            <div className={play ? "button-pause-div" : "button-play-div"}>
            </div>
        </button>
    );
}