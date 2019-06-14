import commentsFetchDataSuccess  from "../actions/commentsFetchDataSuccess";
import commentsIsLoading from "../actions/commentsIsLoading";
import failureRequestComments from "../actions/failureRequestComments";
import {COMMENTS_URL} from '../constants/api'

export function commentsFetchData(url) {
  return (dispatch) => {
    dispatch(commentsIsLoading(true));

    fetch(COMMENTS_URL)
      .then((response) => response.json())
      .then((posts) => dispatch(commentsFetchDataSuccess(posts)))
      .catch(() => dispatch(failureRequestComments(true)));
  };
}
