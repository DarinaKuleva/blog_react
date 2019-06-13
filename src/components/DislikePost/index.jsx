import React from 'react'
import PropTypes from 'prop-types'

class DislikePost extends React.PureComponent {

  static propTypes = {
    dislikePost: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={ this.props.dislikePost }>DISLIKE</button>
    )
  }
}

export default DislikePost
