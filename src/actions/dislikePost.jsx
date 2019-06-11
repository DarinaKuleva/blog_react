const DISLIKE_POST = 'DISLIKE_POST';

function dislikePost( id ) {
  return {
    type: DISLIKE_POST,
    payload: id
  }
}

export default dislikePost
