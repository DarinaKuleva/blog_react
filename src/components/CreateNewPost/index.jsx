import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import FormErrors from '../FormError'
import addNewPost from '../../actions/addNewPost'

import blog from '../Posts/style.module.css'
import createPost from './style.module.css'

class CreateNewPost extends React.PureComponent {
  static propTypes = {
    addNewPost: PropTypes.func.isRequired,
    validateForm: PropTypes.func,
  }

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
      <div className={createPost.container}>
        <div className={createPost.header}>
          <Link to="/" className={blog.button}>
            BACK TO POSTS
          </Link>
          <h2 className={createPost.caption}>CREATE NEW POST</h2>
        </div>
        <form className={createPost.form}>
          <div className={createPost.form_item}>
            <input id="postTitle"
                   name="postTitle"
                   placeholder="Call your post..."
                   type="text"
                   value={ this.state.postTitle }
                   onChange={ this.handlePostInput }
                   className={createPost.form_input}
                   required/>
            <label htmlFor="postTitle"
                   className={createPost.form_label}>
              Call your post...
            </label>
          </div>
          <div className={createPost.form_item}>
            <textarea id="postBody"
                      name="postBody"
                      placeholder="Write your post..."
                      value={ this.state.postBody }
                      onChange={ this.handlePostInput }
                      className={createPost.form_textarea}
                      required/>
            <label htmlFor="postBody"
                   className={createPost.form_label}>
              Write your post...
            </label>
          </div>
          <div>
            <FormErrors formErrors={ this.state.formErrors }/>
          </div>
          <Link to="/">
            { this.state.formValid ?
              <button
                onClick={ this.createPost }
                disabled={ !this.state.formValid }
                className={blog.create}>
                PUBLISH POST
              </button>
              :
              <>
              </>
            }
          </Link>
        </form>
      </div>
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
        postTitleValid = value.length >= 3
        fieldValidationErrors.postTitle = postTitleValid ? '' : 'Post title is too short'
        break
      case 'postBody':
        postBodyValid = value.length >= 20
        fieldValidationErrors.postBody = postBodyValid ? '' : 'Post is too short'
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
