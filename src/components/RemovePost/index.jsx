import React from 'react'

class RemovePost extends React.PureComponent {

  render() {
    return (
      <button onClick={ this.props.removePost }>DELETE</button>
    )
  }
}

export default RemovePost
