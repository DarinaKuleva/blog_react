import React from 'react'
import PropTypes from 'prop-types'
import './like.css'

class LikePost extends React.PureComponent {
  static propTypes = {
    likePost: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={ this.props.likePost }
              className={ this.props.like ? 'like-active' : 'like'}>
      </button>
    )
  }
}

export default LikePost
