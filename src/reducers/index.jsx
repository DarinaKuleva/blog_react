import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './posts';
import { comments, commentsHasErrored, commentsIsLoading } from './comments';

export default combineReducers({
  posts,
  postsHasErrored,
  postsIsLoading,
  comments,
  commentsHasErrored,
  commentsIsLoading
});
