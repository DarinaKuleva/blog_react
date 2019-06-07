import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './posts';
import { comments, commentsHasErrored, commentsIsLoading } from './comments';
import {filterPosts} from './filterPosts'

export default combineReducers({
  posts,
  postsHasErrored,
  postsIsLoading,
  comments,
  commentsHasErrored,
  commentsIsLoading,
  filterPosts
});
