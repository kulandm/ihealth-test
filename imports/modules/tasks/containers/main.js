import React, { Component } from 'react'
import { connect } from 'react-redux'
import Main from '../components/main'
import { addTask, removeTask } from  '../actions'

const mapState = ({Tasks}) => {
  const {tasks, count} = Tasks
  return {
    tasks, count
  }
}
const mapDispatch = (dispatch, getState) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    removeTask: (taskId) => dispatch(removeTask()),
  }
}
export default connect(mapState, mapDispatch)(Main)
