import React from 'react'
import { connect } from 'react-redux'

class RemovePost extends React.PureComponent {

  render() {
    return (
      <button onClick={ this.props.removePost }>DELETE</button>
    )
  }
}

export default connect()( RemovePost )
