const EDIT_POST = 'EDIT_POST';

function editPost( title, body, id ) {
  return {
    type: EDIT_POST,
    title: title,
    body: body,
    id: id,
  }
}

export default editPost
