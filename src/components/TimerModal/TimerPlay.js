export default function TimerPlay({play, setPlay}) {

    return (
        <button onClick={() => setPlay(!play)}> {console.log(play)} Play </button>
    );
}