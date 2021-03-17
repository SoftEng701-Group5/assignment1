export default function CurrentTask(props) {

    const {task} = props;
    return (
        <div className="current-task">
            <h2>Assignment 1</h2>
            <div>
                Subtask 1<br/>subtask 2
            </div>

            <div>
                Due: 34/04/2023
            </div>
            <div>
                701
            </div>
            <div>
                Priority: High
            </div>


        </div>
    );
}