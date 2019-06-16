import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import editPost from '../../actions/editPost'
import FormErrors from '../FormError'
import PropTypes from 'prop-types'
import createPost from '../CreateNewPost/style.module.css'
import blog from '../Posts/style.module.css'

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
      <div className={createPost.container}>
        <div className={createPost.header}>
          <Link to="/" className={blog.button}>
            BACK TO POSTS
          </Link>
          <h2 className={createPost.caption}>EDIT POST</h2>
        </div>
        <form className={createPost.form}>
          <div className={createPost.form_item}>
            <input id="changePostTitle"
                   name="postTitle"
                   defaultValue={openPost.title}
                   type="text"
                   value={ this.props.postTitle }
                   onChange={ this.handleChangePostTitle }
                   className={createPost.form_input}
                   required/>
            <label htmlFor="changePostTitle"
                   className={createPost.form_label}>
              Change post title...
            </label>
          </div>
          <div className={createPost.form_item}>
            <textarea id="changePostBody"
                      name="postBody"
                      defaultValue={openPost.body}
                      value={ this.props.postBody }
                      onChange={ this.handleChangePostBody }
                      className={createPost.form_textarea}
                      required/>
            <label htmlFor="changePostBody"
                   className={createPost.form_label}>
              Change post..
            </label>
          </div>
          <div>
            <FormErrors formErrors={ this.state.formErrors }/>
          </div>
          <Link to="/">
            { this.state.formValid ?
              <button
                onClick={ this.changePost }
                disabled={ !this.state.formValid }
                className={blog.create}>
                EDIT POST
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

  handleChangePostTitle = ( e ) => {
    const name = e.target.name
    const value = e.target.value
    const defaultValue = document.getElementById('changePostBody').defaultValue
    this.setState( { [name]: value },
      () => {
        this.validateField( name, value )
      } )
    if (this.state.postBody === '') {
      this.setState({ postBody: defaultValue })
    }
  }

  handleChangePostBody = ( e ) => {
    const name = e.target.name
    const value = e.target.value
    const defaultValue = document.getElementById('changePostTitle').defaultValue
    this.setState( { [name]: value },
      () => {
        this.validateField( name, value )
      } )
    if (this.state.postTitle === '') {
      this.setState({ postTitle: defaultValue })
    }
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
        postBodyValid = value.length >= 3
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
    this.setState( { formValid: this.state.postTitleValid || this.state.postBodyValid } )
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
