import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducerTasks from '../imports/modules/tasks/reducers'
import App from '../imports/modules/tasks/containers/main.js'

const store = createStore(
  combineReducers({
    ...reducerTasks,
  }),
  compose(
    applyMiddleware(thunk.withExtraArgument({})),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

Meteor.startup(() => {
  render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('render-target'));
});
