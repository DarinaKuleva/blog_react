const LIKE_POST = 'LIKE_POST';

function likePost( id ) {
  return {
    type: LIKE_POST,
    payload: id
  }
}

export default likePost
