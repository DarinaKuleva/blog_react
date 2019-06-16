import failureRequestComments  from '../../actions/failureRequestComments'
import commentsIsLoading  from '../../actions/commentsIsLoading'
import  commentsFetchDataSuccess from '../../actions/commentsFetchDataSuccess'


it('failureRequestComments', () => {
  const expectedAction = {
    type: 'FAILURE_REQUEST_COMMENTS'
  }
  expect(failureRequestComments()).toEqual(expectedAction)
})

it('commentsIsLoading', () => {
  const expectedAction = {
    type: 'COMMENTS_IS_LOADING'
  }
  expect(commentsIsLoading()).toEqual(expectedAction)
})

it('commentsFetchDataSuccess', () => {
  const expectedAction = {
    type: 'COMMENTS_FETCH_DATA_SUCCESS',
    comments: 'some comments'
  }
  expect(commentsFetchDataSuccess('some comments')).toEqual(expectedAction)
})