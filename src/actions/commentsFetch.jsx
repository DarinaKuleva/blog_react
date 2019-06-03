export function commentsHasErrored(bool) {
  return {
    type: 'COMMENTS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function commentsIsLoading(bool) {
  return {
    type: 'COMMENTS_IS_LOADING',
    isLoading: bool
  };
}

export function commentsFetchDataSuccess(comments) {
  return {
    type: 'COMMENTS_FETCH_DATA_SUCCESS',
    comments
  };
}

export function commentsFetchData(url) {
  return (dispatch) => {
    dispatch(commentsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(commentsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((posts) => dispatch(commentsFetchDataSuccess(posts)))
      .catch(() => dispatch(commentsHasErrored(true)));
  };
}
