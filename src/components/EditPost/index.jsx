import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import editPost from '../../actions/editPost'
import FormErrors from '../FormError'
import PropTypes from 'prop-types'

class EditPost extends React.PureComponent {

  static propTypes = {
    editPost: PropTypes.func.isRequired,
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
    const {
      posts,
      match: {
        params: {
          postId,
        },
      },
    } = this.props

    const [openPost] = posts.filter( post => {
      return post.id === +postId
    } )

    return (
      <>
        <form>
          <div>
            <label htmlFor="changePostTitle">Change post title...</label>
            <input id="changePostTitle"
                   name="postTitle"
                   placeholder={ openPost.title }
                   type="text"
                   value={ this.props.postTitle }
                   onChange={ this.handleChangePost }
                   required/>
          </div>
          <div>
            <label htmlFor="changePostBody">Change post...</label>
            <textarea id="changePostBody"
                      name="postBody"
                      placeholder={ openPost.body }
                      value={ this.state.postBody }
                      onChange={ this.handleChangePost }
                      required/>
          </div>
          <Link to="/">
            <button
              onClick={ this.changePost }
              disabled={ !this.state.formValid }
              >
              Edit
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

  handleChangePost = ( e ) => {
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

  changePost = () => {
    const changePostTitle = this.state.postTitle
    const changePostBody = this.state.postBody
    const changePostId = this.props.match.params.postId
    this.props.editPost( changePostTitle, changePostBody, changePostId )
  }
}

const mapStateToProps = ( state ) => {
  return {
    posts: state.posts.data,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    editPost: ( title, body, id ) => dispatch( editPost( title, body, id ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( EditPost )
