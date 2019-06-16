import {LIKE_POST} from '../constants/actions'

function likePost( id ) {
  return {
    type: LIKE_POST,
    payload: id
  }
}

export default likePost
