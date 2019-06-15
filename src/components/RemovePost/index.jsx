import React from 'react'
import PropTypes from 'prop-types'
import blog from '../Posts/style.module.css'

class RemovePost extends React.PureComponent {

  static propTypes = {
    removePost: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={ this.props.removePost }
              className={blog.button}>DELETE POST</button>
    )
  }
}

export default RemovePost
