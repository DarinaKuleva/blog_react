const POSTS_FETCH_DATA_SUCCESS = 'POSTS_FETCH_DATA_SUCCESS'

function postsFetchDataSuccess(posts) {
  return {
    type: POSTS_FETCH_DATA_SUCCESS,
    posts
  };
}

export default postsFetchDataSuccess
