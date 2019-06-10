const initialState = {
  error: false,
  loading: false,
  data: []
}

export function comments(state = initialState, action) {
  switch (action.type) {
    case 'FAILURE_REQUEST_COMMENTS':
      return {
        ...state,
        error: true,
        loading: false
      } ;
    case 'COMMENTS_IS_LOADING':
      return {
        ...state,
        loading: true
      } ;
    case 'COMMENTS_FETCH_DATA_SUCCESS':
      return {
        ...state,
        error: false,
        loading: false,
        data: action.comments
      } ;
    // case 'ADD_NEW_COMMENT':
    //   const newPost = {
    //     title: action.title,
    //     body: action.body,
    //     id: 5565666855
    //   };
    //   return {
    //     error: false,
    //     loading: false,
    //     data: [newPost, ...state.data]
    //   };

    default:
      return state;
  }
}
