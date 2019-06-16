import {DISLIKE_POST} from '../constants/actions'

function dislikePost( id ) {
  return {
    type: DISLIKE_POST,
    payload: id
  }
}

export default dislikePost
