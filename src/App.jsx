import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostsList from './components/Posts/index'

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={PostsList}/>
    </Switch>
  </main>
);

export default App
