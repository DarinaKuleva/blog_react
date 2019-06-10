// const initialState = {
//   hasErrored: false,
//   isLoading: false,
//   data: [
//     {
//       id: 3333,
//       title: 'fvdv',
//       body: 'fdvdf'
//     }
//   ]
// }
//
// export function posts(state = initialState, action) {
//   switch (action.type) {
//     case 'POSTS_HAS_ERRORED':
//       return action.hasErrored;
//     case 'POSTS_IS_LOADING':
//       return action.isLoading;
//     case 'POSTS_FETCH_DATA_SUCCESS':
//       return action.posts;
//
//     default:
//       return state;
//   }
// }

export function failureRequestPosts(state = false, action) {
  switch (action.type) {
    case 'FAILURE_REQUEST_POSTS':
      return action.hasErrored;

    default:
      return state;
  }
}

export function postsIsLoading(state = false, action) {
  switch (action.type) {
    case 'POSTS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function posts(state = [], action) {
  switch (action.type) {
    case 'POSTS_FETCH_DATA_SUCCESS':
      return action.posts;

    default:
      return state;
  }
}
