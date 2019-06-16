import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import App from './App'

const storePage = configureStore()

ReactDOM.render(
  <BrowserRouter>
    <Provider store={storePage}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
