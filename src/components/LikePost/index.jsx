import React from 'react'
import PropTypes from 'prop-types'

import post from './style.module.css'

class LikePost extends React.PureComponent {

  static propTypes = {
    likePost: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={ this.props.likePost }
      className={post.like}>
      </button>
    )
  }
}

export default LikePost
