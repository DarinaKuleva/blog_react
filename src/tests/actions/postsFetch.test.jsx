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


// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import fetchMock from 'fetch-mock'
// import postsFetchData from '../../fetch/fetchPost'
// import expect from 'expect'
//
// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)
//
// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore()
//   })
//
//   it('creates POSTS_FETCH_DATA_SUCCESS when fetching data has been done', () => {
//     fetchMock.getOnce('https://jsonplaceholder.typicode.com/posts', {
//       posts: { data: ['do something'] },
//       headers: { 'content-type': 'application/json' }
//     })
//
//     const expectedActions = [
//       { type: 'POSTS_IS_LOADING' },
//       { type: 'POSTS_FETCH_DATA_SUCCESS', posts: { data: ['do something'] } }
//     ]
//     const store = mockStore({ data: [] })
//
//     return store.dispatch(postsFetchData()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })
