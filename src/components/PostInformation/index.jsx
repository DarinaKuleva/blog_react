import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Comments from '../Comments'

class PostInformation extends React.PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  render() {
    const {
      posts,
      match: {
        params: {
          postId
        },
      },
    } = this.props

    const [openPost] = posts.filter( postItem => {
      return postItem.id === +postId
    } )

    return (
      <>
        <h2>Post Information</h2>
        <div>{openPost.title}</div>
        <div>{openPost.body}</div>
        <Comments commentId = {openPost.id}/>
        <Link to="/">
          POSTS
        </Link>
      </>
    )
  }
}
function mapStateToProps( state ) {
  return {
    posts: state.posts.data
  }
}
export default connect( mapStateToProps )( PostInformation )
