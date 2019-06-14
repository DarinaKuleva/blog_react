import { posts } from '../../reducers/posts'

describe( 'posts reducer', () => {

  it( 'FAILURE_REQUEST_POSTS', () => {
    const initialState = {
      error: false,
      loading: false,
      data: [],
    }

    const action = {
      type: 'FAILURE_REQUEST_POSTS',
    }

    expect( posts( initialState, action ) ).toEqual( {
      ...initialState,
      error: true,
    } )
  } )

  it( 'POSTS_IS_LOADING without error', () => {

    const initialState = {
      error: false,
      loading: false,
      data: [],
    }

    const action = {
      type: 'POSTS_IS_LOADING',
    }

    expect( posts( initialState, action ) ).toEqual( {
      ...initialState,
      loading: true,
    } )
  } )

  it( 'POSTS_FETCH_DATA_SUCCESS', () => {
    const initialState = {
      data: [],
      loading: true,
      error: false,
    }

    const action = {
      type: 'POSTS_FETCH_DATA_SUCCESS',
    }

    expect( posts( initialState, action ) ).toEqual( {
      ...initialState,
      loading: false,
      data: action.posts,
    } )
  } )

  it( 'ADD_NEW_POST', () => {
    const initialState = {
      data: [{
        title: 'title',
        body: 'body',
        id: 6,
      }],
      loading: false,
      error: false,
    }

    const action = {
      type: 'ADD_NEW_POST',
      data: [{
        title: 'title2',
        body: 'body2',
        id: 5,
      }],
    }

    expect( posts( initialState, action ) ).toEqual( {
      ...initialState,
      data: [
        {
          title: action.title,
          body: action.body,
          id: 5,
        },
        {
          title: 'title',
          body: 'body',
          id: 6,
        },
      ],
    } )
  } )

  it( 'REMOVE_POST', () => {
    const initialState = {
      data: [{
        title: 'title',
        body: 'body',
        id: 6,
      },
        {
          title: 'title2',
          body: 'body2',
          id: 7,
        }],
      loading: false,
      error: false,
    }

    const action = {
      type: 'REMOVE_POST',
      payload: 6,
    }

    expect( posts( initialState, action ) ).toEqual( {
      ...initialState,
      data: [
        {
          title: 'title2',
          body: 'body2',
          id: 7,
        }
      ],
    } )
  } )

  it( 'EDIT_POST', () => {
    const initialState = {
      data: [{
        title: 'title',
        body: 'body',
        id: 6,
      },
        {
          title: 'title2',
          body: 'body2',
          id: 7,
        }],
      loading: false,
      error: false,
    }

    const action = {
      type: 'EDIT_POST',
      id: 6,
      title: 'changeTitle',
      body: 'changeBody'
    }

    expect( posts( initialState, action ) ).toEqual( {
      ...initialState,
      data: [
        {
          title: action.title,
          body: action.body,
          id: action.id,
        },
        {
          title: 'title2',
          body: 'body2',
          id: 7,
        }
      ],
    } )
  } )

  it( 'LIKE_POST', () => {
    const initialState = {
      data: [{
        title: 'title',
        body: 'body',
        id: 6,
      }],
      loading: false,
      error: false,
    }

    const action = {
      type: 'LIKE_POST',
      payload: 6
    }

    expect( posts( initialState, action ) ).toEqual( {
      ...initialState,
      data: [
        {
          title: 'title',
          body: 'body',
          id: action.payload,
          like: true,
          dislike: false
        }
      ],
    } )
  } )

  it( 'DISLIKE_POST', () => {
    const initialState = {
      data: [{
        title: 'title',
        body: 'body',
        id: 6,
      }],
      loading: false,
      error: false,
    }

    const action = {
      type: 'DISLIKE_POST',
      payload: 6
    }

    expect( posts( initialState, action ) ).toEqual( {
      ...initialState,
      data: [
        {
          title: 'title',
          body: 'body',
          id: action.payload,
          like: false,
          dislike: true
        }
      ],
    } )
  } )


} )
