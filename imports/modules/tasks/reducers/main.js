import * as types from '../constants/tasks'
import _ from 'lodash'

const initState = {
  tasks: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.ADD:
      const _id = Math.random()
      return {
        ...state,
        tasks: [...state.tasks, {...action.task, _id}]
      }
    case types.REMOVE:
      const index = state.tasks.findIndex((x) => x._id === action.taskId)
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, index),
          ...state.tasks.slice(index + 1)
        ]
      }
  }
  return state
}
