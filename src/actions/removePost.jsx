import {REMOVE_POST} from '../constants/actions'

function deletePost( id ) {
  return {
    type: REMOVE_POST,
    payload: id
  }
}

export default deletePost
