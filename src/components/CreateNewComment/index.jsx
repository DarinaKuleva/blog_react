import React from 'react'
import addNewComment from '../../actions/addNewComment'
import { connect } from 'react-redux'
import FormErrors from '../FormError'
import PropTypes from 'prop-types'

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
    formErrors: { userEmail: '', commentName: '', commentBody: '' },
    postEmailValid: false,
    postNameValid: false,
    postBodyValid: false,
    formValid: false,
  }

  render() {
    return (
      <>
        <button onClick={ this.createComment }
                disabled={ this.state.open ? !this.state.formValid : this.state.formValid }>
          { this.state.open ? 'public new comment ' : 'create new comment' }
        </button>
        { this.state.open
          ? <div>
            <div>
              <label htmlFor="commentName">Call your comment...</label>
              <input id="commentName"
                     name="commentName"
                     placeholder="Title..."
                     type="text"
                     value={ this.state.commentName }
                     onChange={ this.handleCommentInput }
                     required/>
            </div>
            <div>
              <label htmlFor="userEmail">Your email...</label>
              <input id="userEmail"
                     name="userEmail"
                     placeholder="Email..."
                     type="email"
                     value={ this.state.userEmail }
                     onChange={ this.handleCommentInput }
                     required/>
            </div>
            <div>
              <label htmlFor="commentBody">Write your comment ...</label>
              <textarea id="commentBody"
                        name="commentBody"
                        placeholder="Comment..."
                        value={ this.state.commentBody }
                        onChange={ this.handleCommentInput }
                        required/>
            </div>
          </div>
          : <></>
        }
        <div>
          <FormErrors formErrors={ this.state.formErrors }/>
        </div>
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
    let fieldValidationErrors = this.state.formErrors
    let commentEmailValid = this.state.commentEmailValid
    let commentNameValid = this.state.commentNameValid
    let commentBodyValid = this.state.commentBodyValid

    switch ( fieldName ) {
      case 'userEmail':
        commentEmailValid = value.match( /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i )
        fieldValidationErrors.commentEmail = commentEmailValid ? '' : 'Incorrect email'
        break
      case 'commentName':
        commentNameValid = value.length >= 3
        fieldValidationErrors.commentName = commentNameValid ? '' : 'Title is too short'
        break
      case 'commentBody':
        commentBodyValid = value.length >= 20
        fieldValidationErrors.commentBody = commentBodyValid ? '' : 'Body is too short'
        break
      default:
        break
    }
    this.setState( {
      formErrors: fieldValidationErrors,
      commentEmailValid: commentEmailValid,
      commentNameValid: commentNameValid,
      commentBodyValid: commentBodyValid,
    }, this.validateForm )
  }

  validateForm() {
    this.setState( { formValid: this.state.commentEmailValid && this.state.commentNameValid && this.state.commentBodyValid } )
  }

  createComment = () => {
    this.setState( prevState => ({
      open: !prevState.open,
    }) )
    if ( this.state.open ) {
      const commentEmail = this.state.userEmail
      const commentName = this.state.commentName
      const commentBody = this.state.commentBody
      const postId = this.props.commentId
      this.props.addNewComment( commentName, commentEmail, commentBody, postId )
    }
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addNewComment: ( email, name, body, postId ) => dispatch( addNewComment( email, name, body, postId ) ),
  }
}

export default connect( null, mapDispatchToProps )( CreateNewComment )
