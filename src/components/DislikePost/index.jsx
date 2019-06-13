import React from 'react'

class DislikePost extends React.PureComponent {

  render() {
    return (
      <button onClick={ this.props.dislikePost }>DISLIKE</button>
    )
  }
}

export default DislikePost
