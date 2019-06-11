const FIND_POST = 'FIND_POST';

function findPost( title, body) {
  return {
    type: FIND_POST,
    payload: title, body
  }
}

export default findPost
