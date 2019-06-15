import React from 'react'
import PropTypes from 'prop-types'

import post from './style.module.css'

class DislikePost extends React.PureComponent {

  static propTypes = {
    dislikePost: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={ this.props.dislikePost } className={post.dislike}>
      </button>
    )
  }
}

export default DislikePost
