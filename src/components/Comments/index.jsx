import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentsFetchData } from '../../actions/commentsFetch'

class Comments extends PureComponent {

  static propTypes = {
    comments: PropTypes.array.isRequired, //проверить все ли пропсы+подчеркивание
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetchData( 'https://jsonplaceholder.typicode.com/comments' )
  }

  render() {
    const {
      hasErrored,
      isLoading,
      comments,
      commentId,
    } = this.props

    if ( hasErrored ) {
      return <p>Sorry! There was an error loading the items</p>
    }

    if ( isLoading ) {
      return <p>Loading…</p>
    }

    const openPost = comments.filter( commentItem => {
      return commentItem.postId === commentId
    } )

    return (
      <ul>
        { openPost.map( ( comment ) => (
          <li key={ comment.id }>
            <h2>{ comment.name }</h2>
            <p>{ comment.body }</p>
          </li>
        ) ) }
      </ul>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    comments: state.comments,
    hasErrored: state.commentsHasErrored,
    isLoading: state.commentsIsLoading,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchData: ( url ) => dispatch( commentsFetchData( url ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Comments )
