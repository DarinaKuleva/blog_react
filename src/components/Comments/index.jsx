import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentsFetchData } from '../../fetch/fetchComments'

class Comments extends PureComponent {

  static propTypes = {
    comments: PropTypes.array.isRequired, //проверить все ли пропсы+подчеркивание
    failureRequest: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetchData( )
  }

  render() {
    const {
      failureRequest,
      isLoading,
      comments,
      commentId,
    } = this.props

    if ( failureRequest ) {
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
    comments: state.comments.data,
    failureRequest: state.comments.error,
    isLoading: state.comments.loading,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchData: ( url ) => dispatch( commentsFetchData( url ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Comments )
