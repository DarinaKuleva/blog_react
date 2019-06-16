import { FIND_POST } from '../constants/actions'

const initialState = ''

export function filterPosts(state = initialState, action) {
  if (action.type === FIND_POST) {
    return action.payload
  }
  return state
}
