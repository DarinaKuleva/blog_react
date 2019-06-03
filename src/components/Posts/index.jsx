import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postsFetchData } from '../../actions/postsFetch'
import ViewCommentsButton from '../ViewCommentsBtn'

class Posts extends PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired, //проверить все ли пропсы+подчеркивание
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetchData( 'https://jsonplaceholder.typicode.com/posts' )
  }

  state = {

  }

  render() {
    const {
      hasErrored,
      isLoading,
      posts,
    } = this.props

    if ( hasErrored ) {
      return <p>Sorry! There was an error loading the items</p>
    }
    if ( isLoading ) {
      return <p>Loading…</p>
    }
    return (
      <>
      <ul>
        { posts.map( ( post ) => (
          <li key={ post.id }>
            <Link to={ `post-information/${ post.id }` }>
              <h2>{ post.title }</h2>
              <p>{ post.body }</p>
            </Link>
            <ViewCommentsButton commentId={ post.id }/>
          </li>
        ) ) }
      </ul>
        <button>SHOW MORE</button>
      </>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    posts: state.posts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchData: ( url ) => dispatch( postsFetchData( url ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Posts )
