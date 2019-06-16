import {COMMENTS_FETCH_DATA_SUCCESS} from '../constants/actions'

function commentsFetchDataSuccess(comments) {
  return {
    type: COMMENTS_FETCH_DATA_SUCCESS,
    comments
  };
}

export default commentsFetchDataSuccess
