import React from 'react'

class LikePost extends React.PureComponent {

  render() {
    return (
      <button onClick={ this.props.likePost }>LIKE</button>
    )
  }
}

export default LikePost
