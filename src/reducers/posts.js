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
        id: new Date(),
      }
      return {
        error: false,
        loading: false,
        data: [newPost, ...state.data],
      }

    case 'REMOVE_POST':
      return {
        error: false,
        loading: false,
        data: state.data.filter(post => post.id !== action.payload),
      }

    default:
      return state
  }
}
