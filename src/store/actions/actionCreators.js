import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

/** All Tasks */
export const fetchAllTasks = (tasks) => {
    return {
        type: at.FETCH_ALL_TASKS,
        payload: tasks,
    };
};

/** Edit Task */
export const editTask = (task) => {
    return {
        type: at.EDIT_TASK,
        payload: task,
    };
};

/** Single Task */
export const fetchTask = (task) => {
    return {
        type: at.FETCH_TASK,
        payload: task,
    };
};

/** All Employees */
export const fetchAllEmployees = (employees) => {
    return {
        type: at.FETCH_ALL_EMPLOYEES,
        payload: employees,
    };
};
  
/** Single Employee */
export const fetchEmployee = (employee) => {
    return {
        type: at.FETCH_EMPLOYEE,
        payload: employee,
    };
};
