import {ADD_NEW_COMMENT} from '../constants/actions'

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
