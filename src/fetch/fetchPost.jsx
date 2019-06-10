import { failureRequestPosts, postsFetchDataSuccess, postsIsLoading } from '../actions/postsFetch'
import { POSTS_URL } from '../constants/api'

export function postsFetchData(url) {
  return (dispatch) => {
    dispatch(postsIsLoading(true));

    fetch(POSTS_URL)
      .then(response => response.json())
      .then(posts => dispatch(postsFetchDataSuccess(posts)))
      .catch(() => dispatch(failureRequestPosts()));
  };
}
