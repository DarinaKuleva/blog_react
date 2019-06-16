import {
  POSTS_FETCH_DATA_SUCCESS,
  DISLIKE_POST,
  LIKE_POST,
  EDIT_POST,
  REMOVE_POST,
  ADD_NEW_POST,
  POSTS_IS_LOADING,
  FAILURE_REQUEST_POSTS,
} from '../constants/actions'

const initialState = {
  error: false,
  loading: false,
  data: [],
}

export function posts(state = initialState, action) {
  switch (action.type) {
    case FAILURE_REQUEST_POSTS:
      return {
        ...state,
        error: true,
        loading: false,
      }
    case POSTS_IS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case POSTS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: action.posts,
      }
    case ADD_NEW_POST:
      const newPost = {
        title: action.title,
        body: action.body,
        id: state.data[0].id - 1,
      }
      return {
        error: false,
        loading: false,
        data: [newPost, ...state.data],
      }

    case REMOVE_POST:
      return {
        error: false,
        loading: false,
        data: state.data.filter(post => post.id !== action.payload),
      }

    case EDIT_POST:
      return {
        error: false,
        loading: false,
        data: state.data.map(post =>
          parseInt(action.id, 10) === post.id
            ? { ...post, title: action.title, body: action.body }
            : post
        ),
      }

    case LIKE_POST:
      return {
        error: false,
        loading: false,
        data: state.data.map(post =>
          parseInt(action.payload, 10) === post.id
            ? { ...post, like: true, dislike: false }
            : post
        ),
      }

    case DISLIKE_POST:
      return {
        error: false,
        loading: false,
        data: state.data.map(post =>
          parseInt(action.payload, 10) === post.id
            ? { ...post, like: false, dislike: true }
            : post
        ),
      }

    default:
      return state
  }
}
