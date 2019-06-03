import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostsList from './components/Posts'
import PostInformation from './components/PostInformation'

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={PostsList}/>
      <Route path="/post-information/:postId" component={PostInformation} />
    </Switch>
  </main>
);

export default App
