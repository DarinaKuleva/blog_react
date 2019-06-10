import { combineReducers } from 'redux';
import { posts, postsIsLoading, postsHasError } from './posts';
import { comments, commentsHasErrored, commentsIsLoading } from './comments';
import { filterPosts } from './filterPosts'
import { createNewPost } from './createPost'

export default combineReducers({
  posts,
  postsIsLoading,
  postsHasError,
  comments,
  commentsIsLoading,
  commentsHasErrored,
  filterPosts,
  createNewPost
});
