import React from 'react'
import PropTypes from 'prop-types'

class LikePost extends React.PureComponent {

  static propTypes = {
    likePost: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={ this.props.likePost }>LIKE</button>
    )
  }
}

export default LikePost
