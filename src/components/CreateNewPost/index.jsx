import React from 'react'
import { connect } from 'react-redux'
import addNewPost from '../../actions/addNewPost'
import { Link } from 'react-router-dom'
import FormErrors from '../FormError'

class CreateNewPost extends React.PureComponent {

  state = {
    title: '',
    body: '',
    formErrors: { title: '', body: '' },
    postTitleValid: false,
    postBodyValid: false,
    formValid: false,
  }

  render() {
    return (
      <>
        <form>
          <h2>Sign up</h2>
          <div>
            <label htmlFor="title">Call your post...</label>
            <input name="title"
                   placeholder="Title..."
                   type="text"
                   value={ this.setState.title }
                   onChange={ this.handleUserInput }
                   required/>
          </div>
          <div>
            <label htmlFor="body">Write your post ...</label>
            <textarea type="text"
                      name="body"
                      placeholder="Post..."
                      value={ this.setState.title }
                      onChange={ this.handleUserInput }/>
          </div>
          <Link to="/">
            <button
              onClick={ this.createPost }
              disabled={ !this.state.formValid }
            >
              Publish
            </button>
          </Link>
        </form>
        <div>
          <FormErrors formErrors={ this.state.formErrors }/>
        </div>
        <Link to="/">
          POSTS
        </Link>
      </>
    )
  }

  handleUserInput = ( e ) => {
    const name = e.target.name
    const value = e.target.value
    this.setState( { [name]: value },
      () => {
        this.validateField( name, value )
      } )
  }

  validateField( fieldName, value ) {
    let fieldValidationErrors = this.state.formErrors
    let postTitleValid = this.state.postTitleValid
    let postBodyValid = this.state.postBodyValid

    switch ( fieldName ) {
      case 'title':
        // emailValid = value.match( /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i )
        postTitleValid = value.length >= 3
        fieldValidationErrors.postTitle = postTitleValid ? '' : 'Title is too short'
        break
      case 'body':
        postBodyValid = value.length >= 20
        fieldValidationErrors.postBody = postBodyValid ? '' : 'Body is too short'
        break
      default:
        break
    }
    this.setState( {
      formErrors: fieldValidationErrors,
      postTitleValid: postTitleValid,
      postBodyValid: postBodyValid,
    }, this.validateForm )
  }

  validateForm() {
    this.setState( { formValid: this.state.postTitleValid && this.state.postBodyValid } )
  }

  createPost = () => {
    const postTitle = this.state.title
    const postBody = this.state.body
    this.props.addNewPost( postTitle, postBody )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addNewPost: ( title, body ) => dispatch( addNewPost( title, body ) ),
  }
}

export default connect( null, mapDispatchToProps )( CreateNewPost )
