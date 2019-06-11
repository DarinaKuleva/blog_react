import React from 'react'
import { connect } from 'react-redux'

class LikePost extends React.PureComponent {

  render() {
    return (
      <button onClick={ this.props.likePost }>LIKE</button>
    )
  }
}

export default connect()( LikePost )
