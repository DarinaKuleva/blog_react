import React from 'react'
import { connect } from 'react-redux'
import addNewPost from '../../actions/addNewPost'
import { Link } from 'react-router-dom'
import FormErrors from '../FormError'

class CreateNewPost extends React.PureComponent {

  state = {
    postTitle: '',
    postBody: '',
    formErrors: { postTitle: '', postBody: '' },
    postTitleValid: false,
    postBodyValid: false,
    formValid: false,
  }

  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="postTitle">Call your post...</label>
            <input id="postTitle"
                   name="postTitle"
                   placeholder="Title..."
                   type="text"
                   value={ this.state.postTitle }
                   onChange={ this.handlePostInput }
                   required/>
          </div>
          <div>
            <label htmlFor="postBody">Write your post ...</label>
            <textarea id="postBody"
                      name="postBody"
                      placeholder="Post..."
                      value={ this.state.postBody }
                      onChange={ this.handlePostInput }/>
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

  handlePostInput = ( e ) => {
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
      case 'postTitle':
        // emailValid = value.match( /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i )
        postTitleValid = value.length >= 3
        fieldValidationErrors.postTitle = postTitleValid ? '' : 'Title is too short'
        break
      case 'postBody':
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
    const postTitle = this.state.postTitle
    const postBody = this.state.postBody
    this.props.addNewPost( postTitle, postBody )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    addNewPost: ( title, body ) => dispatch( addNewPost( title, body ) ),
  }
}

export default connect( null, mapDispatchToProps )( CreateNewPost )
