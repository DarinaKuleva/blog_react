export function failureRequestComments(bool) {
  return {
    type: 'FAILURE_REQUEST_COMMENTS',
    hasErrored: bool
  };
}

export function commentsIsLoading() {
  return {
    type: 'COMMENTS_IS_LOADING'
  };
}

export function commentsFetchDataSuccess(comments) {
  return {
    type: 'COMMENTS_FETCH_DATA_SUCCESS',
    comments
  };
}
