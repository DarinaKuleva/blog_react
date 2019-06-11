import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class EditPost extends React.PureComponent {

  render() {
    return (
      <div>
        <input
          placeholder="Call your post..."
          type="text"
          // value={ this.setState.title }
          // onChange={ this.handleChangePostTitle }
        />
        <textarea
          placeholder="Write your post ..."
          // value={ this.state.body }
          // onChange={ this.handleChangePost }
        />
        <Link to="/">
          <button
            // onClick={ this.createPost }
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

  // handleChangePostTitle = e => {
  //   this.setState( { title: e.target.value } )
  // }
  //
  // handleChangePost = e => {
  //   this.setState( { body: e.target.value } )
  // }
  //
  // createPost = () => {
  //   const postTitle = this.state.title
  //   const postBody = this.state.body
  //   this.props.addNewPost( postTitle, postBody )
  //   this.setState( { title: '', body: '' } )
  // }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    // addNewPost: ( title, body ) => dispatch( addNewPost( title, body ) ),
  }
}

export default connect( null, mapDispatchToProps )( EditPost )
