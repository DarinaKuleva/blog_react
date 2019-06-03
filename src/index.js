import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const storePage = configureStore()

ReactDOM.render(
  <BrowserRouter>
    <Provider store={storePage}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
