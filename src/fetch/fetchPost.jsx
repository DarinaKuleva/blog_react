import failureRequestPosts from '../actions/failureRequestPosts'
import  postsFetchDataSuccess from '../actions/postsFetchDataSuccess'
import  postsIsLoading from '../actions/postsIsLoading'
import { POSTS_URL } from '../constants/api'

function postsFetchData(url) {
  return (dispatch) => {
    dispatch(postsIsLoading(true));

    fetch(POSTS_URL)
      .then(response => response.json())
      .then(posts => dispatch(postsFetchDataSuccess(posts)))
      .catch(() => dispatch(failureRequestPosts()));
  };
}

export default postsFetchData
