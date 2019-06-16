import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import addNewComment from '../../actions/addNewComment'

import blog from '../Posts/style.module.css'
import newComment from './style.module.css'
import './validation.css'

class CreateNewComment extends React.PureComponent {
  static propTypes = {
    addNewComment: PropTypes.func.isRequired,
    validateForm: PropTypes.func,
    postId: PropTypes.number
  }

  state = {
    open: false,
    userEmail: '',
    commentName: '',
    commentBody: '',
    commentEmailValid: false,
    commentNameValid: false,
    commentBodyValid: false,
    formValid: false,
  }

  render() {
    return (
      <>
        <button onClick={ this.createComment }
                className={blog.create}>
          {this.state.open ? 'HIDE NEW COMMENT' : 'CREATE NEW COMMENT'}
        </button>
        { this.state.open
          ? <form className={newComment.form}>
            <div className={newComment.form_item}>
              <input id="commentName"
                     name="commentName"
                     placeholder="Call your comment..."
                     type="text"
                     value={ this.state.commentName }
                     onChange={ this.handleCommentInput }
                     className={this.state.commentNameValid ? 'form_input' : 'form_input form_input-invalid'}
                     required/>
              <label htmlFor="commentName"
                     className={'form_label'}>
                Call your comment...
              </label>
            </div>
            <div className={newComment.form_item}>
              <input id="userEmail"
                     name="userEmail"
                     placeholder="Write your email..."
                     type="email"
                     value={ this.state.userEmail }
                     onChange={ this.handleCommentInput }
                     className={this.state.commentEmailValid ? 'form_input' : 'form_input form_input-invalid'}
                     required/>
              <label htmlFor="userEmail"
                     className={'form_label'}>
                Write your email...
              </label>
            </div>
            <div className={newComment.form_item}>
              <textarea id="commentBody"
                        name="commentBody"
                        placeholder=" Write your comment ..."
                        value={ this.state.commentBody }
                        onChange={ this.handleCommentInput }
                        className={this.state.commentBodyValid ? 'form_textarea' : 'form_input form_textarea-invalid'}
                        required/>
              <label htmlFor="commentBody"
                     className={'form_label'}>
                Write comment...
              </label>
            </div>
            {this.state.formValid ?
              <button onClick={this.publicComment}
                      className={blog.create}>
                PUBLIC NEW COMMENT
              </button>
              : <></>
            }
          </form>
          : <></>
        }
      </>
    )
  }

  handleCommentInput = ( e ) => {
    const name = e.target.name
    const value = e.target.value
    this.setState( { [name]: value },
      () => {
        this.validateField( name, value )
      } )
  }

  validateField( fieldName, value ) {
    let commentEmailValid = this.state.commentEmailValid
    let commentNameValid = this.state.commentNameValid
    let commentBodyValid = this.state.commentBodyValid

    switch ( fieldName ) {
      case 'userEmail':
        commentEmailValid = value.match( /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i )
        break
      case 'commentName':
        commentNameValid = value.length >= 0
        break
      case 'commentBody':
        commentBodyValid = value.length >= 0
        break
      default:
        break
    }
    this.setState( {
      commentEmailValid: commentEmailValid,
      commentNameValid: commentNameValid,
      commentBodyValid: commentBodyValid,
    }, this.validateForm )
  }

  validateForm() {
    this.setState( { formValid: this.state.commentEmailValid && this.state.commentNameValid && this.state.commentBodyValid } )
  }

  createComment = () => {
    this.setState(prevState => ({
        open: !prevState.open,
      }),
    )
  }

  publicComment = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }))
    const commentEmail = this.state.userEmail
    const commentName = this.state.commentName
    const commentBody = this.state.commentBody
    const postId = this.props.commentId
    this.props.addNewComment(commentName, commentEmail, commentBody, postId)
    this.setState({
      commentName: '',
      userEmail: '',
      commentBody: '',
      commentEmailValid: false,
      commentNameValid: false,
      commentBodyValid: false,
      formValid: false,
    })
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addNewComment: ( email, name, body, postId ) => dispatch( addNewComment( email, name, body, postId ) ),
  }
}

export default connect( null, mapDispatchToProps )( CreateNewComment )
