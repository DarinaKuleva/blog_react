const initialState = {
  createdPosts: []
}

export function createNewPost( state = initialState, action) {
  if (action.type === 'ADD_NEW_POST') {
    const newPost = {
      id: new Date(),
      title: action.title,
      body: action.body
    }
    return  {
      createdPosts: [...state.createdPosts, newPost]
    }
  }
  return state;
}
