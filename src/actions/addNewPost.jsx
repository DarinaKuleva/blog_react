const ADD_NEW_POST = 'ADD_NEW_POST';

function addNewPost( title, body ) {
  return {
    type: ADD_NEW_POST,
    title: title,
    body: body
  }
}

export default addNewPost
