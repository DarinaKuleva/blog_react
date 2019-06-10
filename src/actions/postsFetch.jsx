const FAILURE_REQUEST_POSTS = 'FAILURE_REQUEST_POSTS';//везде вынести в переменные!!!!

export function failureRequestPosts() {
  return {
    type: FAILURE_REQUEST_POSTS
  };
}

export function postsIsLoading() {
  return {
    type: 'POSTS_IS_LOADING'
  };
}

export function postsFetchDataSuccess(posts) {
  return {
    type: 'POSTS_FETCH_DATA_SUCCESS',
    posts
  };
}
