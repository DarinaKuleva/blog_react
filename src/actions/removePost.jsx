const REMOVE_POST = 'REMOVE_POST';

function deletePost( id ) {
  return {
    type: REMOVE_POST,
    payload: id
  }
}

export default deletePost
