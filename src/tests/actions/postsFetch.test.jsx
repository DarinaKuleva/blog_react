import failureRequestPosts  from '../../actions/failureRequestPosts'
import postsIsLoading  from '../../actions/postsIsLoading'
import postsFetchDataSuccess from '../../actions/postsFetchDataSuccess'


it('failureRequestPosts', () => {
  const expectedAction = {
    type: 'FAILURE_REQUEST_POSTS'
  }
  expect(failureRequestPosts()).toEqual(expectedAction)
})

it('postsIsLoading', () => {
  const expectedAction = {
    type: 'POSTS_IS_LOADING'
  }
  expect(postsIsLoading()).toEqual(expectedAction)
})

it('postsFetchDataSuccess', () => {
  const expectedAction = {
    type: 'POSTS_FETCH_DATA_SUCCESS',
    posts: 'some posts'
  }
  expect(postsFetchDataSuccess('some posts')).toEqual(expectedAction)
})
