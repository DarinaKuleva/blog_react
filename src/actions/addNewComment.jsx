const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

function addNewComment( name, email, body, postId ) {
  return {
    type: ADD_NEW_COMMENT,
    name: name,
    email: email,
    body: body,
    postId: postId
  }
}

export default addNewComment
