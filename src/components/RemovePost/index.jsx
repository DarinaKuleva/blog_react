import React from 'react'
import PropTypes from 'prop-types'

class RemovePost extends React.PureComponent {

  static propTypes = {
    removePost: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={ this.props.removePost }>DELETE</button>
    )
  }
}

export default RemovePost
