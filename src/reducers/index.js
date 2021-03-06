import { combineReducers } from 'redux'
import { posts } from './posts'
import { comments } from './comments'
import { filterPosts } from './filterPosts'

export default combineReducers({
  posts,
  comments,
  filterPosts,
})
