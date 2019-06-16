import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CreateNewComment from '../CreateNewComment'
import { commentsFetchData } from '../../fetch/fetchComments'

import commentBlock from './style.module.css'
import blog from '../Posts/style.module.css'

class Comments extends PureComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    failureRequest: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchData: PropTypes.func.isRequired
  }

  componentDidMount() {
    if (this.props.comments.length === 0) {
      this.props.fetchData()
    }
  }

  render() {
    const {
      failureRequest,
      isLoading,
      comments,
      commentId,
    } = this.props

    if ( failureRequest ) {
      return <p className={blog.error}>Sorry! There was an error loading the comments</p>
    }

    if ( isLoading ) {
      return <p className={blog.loading}></p>
    }

    const openPost = comments.filter( commentItem => {
      return commentItem.postId === commentId
    } )

    return (
      <div className={commentBlock.container}>
        <CreateNewComment commentId={commentId}/>
        { openPost.length > 0 ?
          <ul className={commentBlock.list}>
            { openPost.map( ( comment ) => (
              <li key={ comment.id }
                  className={commentBlock.item}>
                <h2 className={commentBlock.name}>{ comment.name }</h2>
                <p className={commentBlock.email}>{ comment.email }</p>
                <p>{ comment.body }</p>
              </li>
            ) ) }
          </ul>
          :
          <div className={commentBlock.no_comments}>This post hasn't comments yet</div>
        }
      </div>
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
