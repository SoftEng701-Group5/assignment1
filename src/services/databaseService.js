import firebaseConnection from "./firebase";

/**
 * A "get" request to the firebase cloud firestore which retrieves all the tasks for a specific user
 * @param {*} user_id Unique user identification as a string
 * @returns All the specified users task as an array of javascript objects with fields:
 * Description: string
 * End_date: timestamp
 * Label: string
 * Name: string
 * Start_date: timestamp
 * Task_id: string
 * User_id: string
 */
const fetchTasks = async (user_id) => {
    const db = firebaseConnection.firestore();
    const data = await db.collection("Tasks").where("User_id", "==", user_id).get();
    const tasks = data.docs.map(doc => ({ ...doc.data(), Task_id: doc.id }));
    console.log(tasks);
    return tasks;
}

/**
 * A "post" request to the firebase cloud firestore which creates an new task for a specific user
 * @param {*} start_date Date object
 * @param {*} label string
 * @param {*} description string
 * @param {*} name string
 * @param {*} user_id string
 * @param {*} end_date Date object
 */
const createTask = async (start_date, label, description, name, user_id, end_date) => {
    const db = firebaseConnection.firestore();
    db.collection("Tasks").add({
        Start_date: start_date,
        Label: label,
        Description: description,
        Name: name,
        User_id: user_id,
        End_date: end_date
    });
}

/**
 * A "put" request to the firebase cloud firestore which updates a specific task for a specific user
 * NOTE: param "newTaskData" must contain all fields of a task, regardless of changes or not.
 * @param {*} task_id ID of the task as string
 * @param {*} newTaskData Javascript object containing task data. These are:
 * Description: string
 * End_date: Date object
 * Label: string
 * Name: string
 * Start_date: Date object
 * Task_id: string
 * User_id: string
 */
const updateTask = async (task_id, newTaskData) => {
    const db = firebaseConnection.firestore();
    db.collection('Tasks').doc(task_id).set(newTaskData);
}

/**
 * A "delete" request to the firebase cloud firestore which deletes a specific task for a specific user
 * @param {*} task_id string
 */
const deleteTask = async (task_id) => {
    const db = firebaseConnection.firestore();
    db.collection("Tasks").doc(task_id).delete();
}

export { fetchTasks, createTask, deleteTask, updateTask }