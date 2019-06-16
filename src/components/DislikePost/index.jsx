import React from 'react'
import PropTypes from 'prop-types'

import './dislike.css'

class DislikePost extends React.PureComponent {

  static propTypes = {
    dislikePost: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={ this.props.dislikePost }
              className={ this.props.dislike ? 'dislike-active' : 'dislike'}>
      </button>
    )
  }
}

export default DislikePost
