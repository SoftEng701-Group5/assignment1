import firebaseConnection from "./firebase";

/**
 * A "get" request to the firebase cloud firestore which retrieves all the tasks for a specific user
 * @param {*} userId Unique user identification as a string
 * @returns All the specified users task as an array of javascript objects with fields:
 * Description: string
 * End_date: timestamp
 * Label: string
 * Name: string
 * Start_date: timestamp
 * Task_id: string
 * User_id: string
 */
const fetchTasks = async (userId) => {
    const db = firebaseConnection.firestore();
    const data = await db.collection("Tasks").where("User_id", "==", userId).get();
    const tasks = data.docs.map(doc => ({ ...doc.data(), Task_id: doc.id }));
    return tasks;
}

/**
 * A "post" request to the firebase cloud firestore which creates an new task for a specific user
 * @param {*} startDate Date object
 * @param {*} label string
 * @param {*} description string
 * @param {*} name string
 * @param {*} userId string
 * @param {*} endDate Date object
 */
const createTask = async (startDate, label, description, name, userId, endDate) => {
    const db = firebaseConnection.firestore();
    db.collection("Tasks").add({
        Start_date: startDate,
        Label: label,
        Description: description,
        Name: name,
        User_id: userId,
        End_date: endDate,
        Is_complete: false
    });
}

/**
 * A "put" request to the firebase cloud firestore which updates a specific task for a specific user
 * NOTE: param "newTaskData" must contain all fields of a task, regardless of changes or not.
 * @param {*} taskId ID of the task as string
 * @param {*} newTaskData Javascript object containing task data. These are:
 * Description: string
 * End_date: Date object
 * Label: string
 * Name: string
 * Start_date: Date object
 * Task_id: string
 * User_id: string
 */
const updateTask = async (taskId, newTaskData) => {
    const db = firebaseConnection.firestore();
    db.collection("Tasks").doc(taskId).set(newTaskData);
}

/**
 * A "delete" request to the firebase cloud firestore which deletes a specific task for a specific user
 * @param {*} taskId string
 */
const deleteTask = async (taskId) => {
    const db = firebaseConnection.firestore();
    db.collection("Tasks").doc(taskId).delete();
}

export { fetchTasks, createTask, deleteTask, updateTask }