const initialState = {
  test: 0,
}

export function removePost(state = initialState, action) {
  if (action.type === 'REMOVE_POST') {
    return {
      test: 1,
    }
  }
  return state
}
