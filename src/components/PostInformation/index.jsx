import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Comments from '../Comments'

import blog from '../Posts/style.module.css'
import postInformation from './style.module.css'

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
      <div className={postInformation.container}>
        <div className={postInformation.header}>
          <Link to="/" className={blog.button}>
            BACK TO POSTS
          </Link>
        <h2 className={postInformation.caption}>POST INFORMATION</h2>
        </div>
        <h2 className={postInformation.title}>{openPost.title}</h2>
        <p className={blog.posts_body}>{openPost.body}</p>
        <Comments commentId = {openPost.id}/>
      </div>
    )
  }
}
function mapStateToProps( state ) {
  return {
    posts: state.posts.data
  }
}
export default connect( mapStateToProps )( PostInformation )
