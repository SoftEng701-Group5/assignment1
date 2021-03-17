export default function TimerPlay(props) {

    const {play, setPlay} = props;
    return (
        <button className="button-play" onClick={() => setPlay(!play)}>
            Play
        </button>
    );
}