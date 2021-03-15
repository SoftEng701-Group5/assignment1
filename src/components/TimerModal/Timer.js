export default function Timer({startTime}) {

    return (
        <h1> {startTime.hours !== "00" && startTime.hours + ":"}
        {startTime.minutes}:{startTime.seconds}</h1>
    );
}
