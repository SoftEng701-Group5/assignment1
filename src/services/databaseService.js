import firebaseConnection from "./firebase";

/**
 * A "get" request to the firebase cloud firestore which retrieves all the tasks for a specific user
 * @param {*} userId Unique user identification as a string. You can get this from currentUser.uid
 * @returns All the specified users task as an array of javascript objects with fields:
 * Description: string
 * End_date: timestamp
 * Label: string
 * Name: string
 * Start_date: timestamp
 * Task_id: string
 * User_id: string
 * Is_complete: boolean
 */
const fetchTasks = async (userId) => {
  const db = firebaseConnection.firestore();
  const data = await db
    .collection("Tasks")
    .where("User_id", "==", userId)
    .get();
  const tasks = data.docs.map((doc) => ({ ...doc.data(), Task_id: doc.id }));
  return tasks;
};

/**
 * A "post" request to the firebase cloud firestore which creates an new task for a specific user
 * @param {*} startDate Date object
 * @param {*} label string
 * @param {*} description string
 * @param {*} name string
 * @param {*} userId string
 * @param {*} endDate Date object
 */
const createTask = async (
  startDate,
  label,
  description,
  name,
  userId,
  endDate,
  kanbanColumn
) => {
  const db = firebaseConnection.firestore();
  db.collection("Tasks").add({
    Start_date: startDate,
    Label: label,
    Description: description,
    Name: name,
    User_id: userId,
    End_date: endDate,
    Is_complete: false,
    Kanban_Column: kanbanColumn,
  });
};

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
 * Is_complete: boolean
 */
const updateTask = async (taskId, newTaskData) => {
  const db = firebaseConnection.firestore();
  db.collection("Tasks").doc(taskId).set(newTaskData);
};

/**
 * A "delete" request to the firebase cloud firestore which deletes a specific task for a specific user
 * @param {*} taskId string
 */
const deleteTask = async (taskId) => {
  const db = firebaseConnection.firestore();
  db.collection("Tasks").doc(taskId).delete();
};

/**
 * A "get" request to the firebase cloud firestore which retrieves all the goals for a specific user
 * @param {*} userId Unique user identification as a string. You can get this from currentUser.uid
 * @returns All the specified users goals as an array of javascript objects with fields:
 * Description: string
 * End_date: timestamp
 * Name: string
 * Goal_id: string
 * User_id: string
 * Is_complete: boolean
 */
const fetchGoals = async (userId) => {
  const db = firebaseConnection.firestore();
  const data = await db
    .collection("Goals")
    .where("User_id", "==", userId)
    .get();
  const goals = data.docs.map((doc) => ({ ...doc.data(), Task_id: doc.id }));
  return goals;
};

/**
 * A "post" request to the firebase cloud firestore which creates an new goal for a specific user
 * @param {*} description string
 * @param {*} name string
 * @param {*} userId string
 * @param {*} endDate Date object
 */
const createGoal = async (description, name, userId, endDate) => {
  const db = firebaseConnection.firestore();
  db.collection("Goals").add({
    Description: description,
    Name: name,
    User_id: userId,
    End_date: endDate,
    Is_complete: false,
  });
};

/**
 * A "put" request to the firebase cloud firestore which updates a specific goal for a specific user
 * NOTE: param "newGoalData" must contain all fields of a goal, regardless of changes or not.
 * @param {*} goalId ID of the goal as string
 * @param {*} newTGoalData Javascript object containing goal data. These are:
 * Description: string
 * End_date: Date object
 * Name: string
 * Goal_id: string
 * User_id: string
 * Is_complete: boolean
 */
const updateGoal = async (goalId, newGoalData) => {
  const db = firebaseConnection.firestore();
  db.collection("Goals").doc(goalId).set(newGoalData);
};

export {
  fetchTasks,
  createTask,
  deleteTask,
  updateTask,
  fetchGoals,
  createGoal,
  updateGoal,
};
