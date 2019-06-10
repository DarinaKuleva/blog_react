import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostsList from './components/Posts'
import PostInformation from './components/PostInformation'
import CreateNewPost from './components/CreateNewPost'

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={PostsList}/>
      <Route path="/post-information/:postId" component={PostInformation} />
      <Route path="/create-post" component={CreateNewPost} />
    </Switch>
  </main>
);

export default App
