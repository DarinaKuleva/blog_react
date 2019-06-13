import {posts} from '../../reducers/posts'

describe('posts reducer', () => {

  it('FAILURE_REQUEST_POSTS', () => {
    const initialState = {
      error: false,
      loading: false,
      data: [],
    }

    const action = {
      type: 'FAILURE_REQUEST_POSTS',
    }

    expect(posts(initialState, action)).toEqual({
      ...initialState,
      error: true,
    })
  })

  it('POSTS_IS_LOADING without error', () => {

    const initialState = {
      error: false,
      loading: false,
      data: [],
    }

    const action = {
      type: 'POSTS_IS_LOADING',
    }

    expect(posts(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    })
  })

  it('POSTS_FETCH_DATA_SUCCESS', () => {
    const initialState = {
      data: [],
      loading: true,
      error: false,
    }

    const action = {
      type: 'POSTS_FETCH_DATA_SUCCESS',
    }

    expect(posts(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      data: action.posts,
    })
  })

})
