export default function Timer({startTime}) {

    const time = parseTimer(startTime);

    return (

        <h1> {time.hours !== "00" && time.hours + ":"}
        {time.minutes} : {time.seconds} </h1>
    );
}

/* Parses a given string to time
Note: startTime string must be in the format hh:mm:ss */
function parseTimer(startTime) {

    let time = {};
    let timeArr = startTime.split(':');

    if (timeArr.length === 3) {
        time["hours"] = timeArr[0];
        time["minutes"] = timeArr[1];
        time["seconds"]  = timeArr[2];
    }

    return time;
}