const FAILURE_REQUEST_POSTS = 'FAILURE_REQUEST_POSTS';
const POSTS_IS_LOADING = 'POSTS_IS_LOADING';
const POSTS_FETCH_DATA_SUCCESS = 'POSTS_FETCH_DATA_SUCCESS'

export function failureRequestPosts() {
  return {
    type: FAILURE_REQUEST_POSTS
  };
}

export function postsIsLoading() {
  return {
    type: POSTS_IS_LOADING
  };
}

export function postsFetchDataSuccess(posts) {
  return {
    type: POSTS_FETCH_DATA_SUCCESS,
    posts
  };
}
