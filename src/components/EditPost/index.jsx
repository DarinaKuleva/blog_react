import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import editPost from '../../actions/editPost'

class EditPost extends React.PureComponent {
  state = {
    title: '',
    body: ''
  }

  onClickButton = () => {
      const commentTitle = this.state.title
      const commentBody = this.state.body
      const postId = this.props.match.params.postId
      this.props.editPost( commentTitle, commentBody, postId)
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

    const [openPost] = posts.filter( post => {
      return post.id === +postId
    } )

    return (
      <div>
        <input
          placeholder={ openPost.title }
          type="text"
          value={ this.props.title }
          onChange={ this.handleChangePostTitle }
        />
        <textarea
          placeholder={ openPost.body }
          value={ this.state.body }
          onChange={ this.handleChangePost }
        />
        <Link to="/">
          <button
            onClick={ this.onClickButton }
          >
            Edit
          </button>
        </Link>
        <Link to="/">
          POSTS
        </Link>
      </div>
    )
  }

  handleChangePostTitle = e => {
    this.setState( { title: e.target.value} );
  }

  handleChangePost = e => {
    this.setState( { body: e.target.value } )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.data
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    editPost: ( title, body, id ) => dispatch(editPost( title, body, id ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( EditPost )
