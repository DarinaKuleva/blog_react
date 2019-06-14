import {comments } from '../../reducers/comments'

describe('comments reducer', () => {

  it('FAILURE_REQUEST_COMMENTS', () => {
    const initialState = {
      error: false,
      loading: false,
      data: [],
    }

    const action = {
      type: 'FAILURE_REQUEST_COMMENTS',
    }

    expect(comments(initialState, action)).toEqual({
      ...initialState,
      error: true,
    })
  })

  it('COMMENTS_IS_LOADING without error', () => {
    const initialState = {
      error: false,
      loading: false,
      data: [],
    }

    const action = {
      type: 'COMMENTS_IS_LOADING',
    }

    expect(comments(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    })
  })

  it('COMMENTS_FETCH_DATA_SUCCESS', () => {
    const initialState = {
      data: [],
      loading: true,
      error: false,
    }

    const action = {
      type: 'COMMENTS_FETCH_DATA_SUCCESS',
    }

    expect(comments(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      data: action.comments,
    })
  })

  it( 'ADD_NEW_COMMENT', () => {
    const initialState = {
      data: [{
        name: 'name',
        email: 'email',
        body: 'body',
        id: 2,
        postId: 1,
      }],
      loading: false,
      error: false,
    }

    const action = {
      type: 'ADD_NEW_COMMENT',
      data: [{
        name: 'name2',
        email: 'email2',
        body: 'body2',
        id: 1,
        postId: 1
      }],
    }

    expect( comments( initialState, action ) ).toEqual( {
      ...initialState,
      data: [
        {
          name: action.name,
          email: action.email,
          body: action.body,
          id: 2,
          postId: action.postId,
        },
        {
          name: 'name',
          email: 'email',
          body: 'body',
          id: 2,
          postId: 1,
        },
      ],
    } )
  } )
})
