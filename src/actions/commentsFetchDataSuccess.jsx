const COMMENTS_FETCH_DATA_SUCCESS = 'COMMENTS_FETCH_DATA_SUCCESS';

function commentsFetchDataSuccess(comments) {
  return {
    type: COMMENTS_FETCH_DATA_SUCCESS,
    comments
  };
}

export default commentsFetchDataSuccess
