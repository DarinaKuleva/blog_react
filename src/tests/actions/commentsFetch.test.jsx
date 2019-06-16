import {
  COMMENTS_FETCH_DATA_SUCCESS,
  COMMENTS_IS_LOADING,
  FAILURE_REQUEST_COMMENTS,
} from '../../constants/actions'


it('failureRequestComments', () => {
  const expectedAction = {
    type: FAILURE_REQUEST_COMMENTS
  }
  expect(failureRequestComments()).toEqual(expectedAction)
})

it('commentsIsLoading', () => {
  const expectedAction = {
    type: COMMENTS_IS_LOADING
  }
  expect(commentsIsLoading()).toEqual(expectedAction)
})

it('commentsFetchDataSuccess', () => {
  const expectedAction = {
    type: COMMENTS_FETCH_DATA_SUCCESS,
    comments: 'some comments'
  }
  expect(commentsFetchDataSuccess('some comments')).toEqual(expectedAction)
})
