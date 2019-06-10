function deletePost( id ) {
  return {
    type: 'REMOVE_POST',
    payload: id
  }
}

export default deletePost
