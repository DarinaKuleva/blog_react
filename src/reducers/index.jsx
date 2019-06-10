import { combineReducers } from 'redux';
import { posts, postsIsLoading, failureRequestPosts } from './posts';
import { comments, commentsIsLoading, failureRequestComments } from './comments';
import { filterPosts } from './filterPosts'
import { createNewPost } from './createPost'
import { removePost } from './removePost'

export default combineReducers({
  posts,
  postsIsLoading,
  failureRequestPosts,
  comments,
  commentsIsLoading,
  failureRequestComments,
  filterPosts,
  createNewPost,
  removePost
});
