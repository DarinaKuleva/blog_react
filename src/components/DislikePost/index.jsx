import React from 'react'
import { connect } from 'react-redux'

class DislikePost extends React.PureComponent {

  render() {
    return (
      <button onClick={ this.props.dislikePost }>DISLIKE</button>
    )
  }
}

export default connect()( DislikePost )
