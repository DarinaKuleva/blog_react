import {POSTS_FETCH_DATA_SUCCESS} from '../constants/actions'

function postsFetchDataSuccess(posts) {
  return {
    type: POSTS_FETCH_DATA_SUCCESS,
    posts
  };
}

export default postsFetchDataSuccess
