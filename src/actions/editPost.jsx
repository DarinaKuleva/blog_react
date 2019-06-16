import {EDIT_POST} from '../constants/actions'

function editPost( title, body, id ) {
  return {
    type: EDIT_POST,
    title: title,
    body: body,
    id: id,
  }
}

export default editPost
