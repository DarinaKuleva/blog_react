const initialState = {
  error: false,
  loading: false,
  data: [],
}

export function posts(state = initialState, action) {
  switch (action.type) {
    case 'FAILURE_REQUEST_POSTS':
      return {
        ...state,
        error: true,
        loading: false,
      }
    case 'POSTS_IS_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'POSTS_FETCH_DATA_SUCCESS':
      return {
        ...state,
        error: false,
        loading: false,
        data: action.posts,
      }
    case 'ADD_NEW_POST':
      const newPost = {
        title: action.title,
        body: action.body,
        id: 5565855,
      }
      return {
        error: false,
        loading: false,
        data: [newPost, ...state.data],
      }

    default:
      return state
  }
}
