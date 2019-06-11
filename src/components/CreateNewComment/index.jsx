import React from 'react'
import addNewComment from '../../actions/addNewComment'
import { connect } from 'react-redux'

class CreateNewComment extends React.PureComponent {
  state = {
    open: false,
    email: '',
    name: '',
    body: '',
  }
  onClickButton = () => {
    this.setState( prevState => ({
      open: !prevState.open,
    }) )
    if (this.state.open) {
      const commentEmail = this.state.email
      const commentName = this.state.name
      const commentBody = this.state.body
      const postId = this.props.commentId
      this.props.addNewComment( commentEmail, commentName,  commentBody, postId)
      this.setState( { name: '', body: '', email: '' } )
    }
  }

  render() {
    return (
      <>
        <button onClick={ this.onClickButton }>
          { this.state.open ? 'public new comment ' : 'create new comment' }
        </button>
        { this.state.open
          ? <div>
            <input
              placeholder="Your email..."
              type="text"
              value={ this.setState.email }
              onChange={ this.handleChangeUserEmail }
            />
            <input
              placeholder="Call your comment..."
              type="text"
              value={ this.setState.title }
              onChange={ this.handleChangeCommentName }
            />
            <textarea
              placeholder="Write your comment ..."
              value={ this.state.body }
              onChange={ this.handleChangeComment }
            />
            {/*<button*/}
            {/*  onClick={ this.createPost }*/}
            {/*>*/}
            {/*  Public new comment*/}
            {/*</button>*/}
          </div>
          : <></>
        }
      </>
    )
  }

handleChangeUserEmail = e => {
  this.setState( { email: e.target.value } )
}

handleChangeCommentName = e => {
  this.setState( { name: e.target.value } )
}

handleChangeComment = e => {
    this.setState( { body: e.target.value } )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addNewComment: ( email, name, body, postId) => dispatch( addNewComment( email, name, body, postId ) ),
  }
}

export default connect( null, mapDispatchToProps )( CreateNewComment )
