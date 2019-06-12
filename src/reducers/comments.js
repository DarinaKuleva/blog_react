const initialState = {
  error: false,
  loading: false,
  data: [],
}

export function comments(state = initialState, action) {
  switch (action.type) {
    case 'FAILURE_REQUEST_COMMENTS':
      return {
        ...state,
        error: true,
        loading: false,
      }
    case 'COMMENTS_IS_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'COMMENTS_FETCH_DATA_SUCCESS':
      return {
        ...state,
        error: false,
        loading: false,
        data: action.comments,
      }
    case 'ADD_NEW_COMMENT':
      const newComment = {
        name: action.name,
        email: action.email,
        body: action.body,
        id: state.data.length + 1,
        postId: action.postId,
      }
      return {
        error: false,
        loading: false,
        data: [newComment, ...state.data],
      }

    default:
      return state
  }
}
