import {FIND_POST} from '../constants/actions'

function findPost( title, body) {
  return {
    type: FIND_POST,
    payload: title, body
  }
}

export default findPost
