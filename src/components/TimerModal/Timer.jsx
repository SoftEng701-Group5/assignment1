export default function Timer({startTime}) {

    const minutes = Math.floor(startTime.seconds / 60);
    const seconds = startTime.seconds % 60;

    return (
        <h1>
            {minutes < 10 && "0"}{minutes}:{seconds < 10 && "0"}{seconds} </h1>
    );
}
