import * as types from '../constants/tasks'

export const addTask = (task) => {
  return (dispatch, getState, {}) => {
    dispatch({
      type: types.ADD,
      task
    })
  }
}

export const removeTask = (taskId) => {
  return (dispatch, getState, {}) => {
    dispatch({
      type: types.REMOVE,
      taskId
    })
  }
}
