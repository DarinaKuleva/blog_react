import React from 'react'
import PropTypes from 'prop-types'
import Comments from '../Comments'

import blog from '../Posts/style.module.css'

class ViewCommentsButton extends React.PureComponent {
  static propTypes = {
    commentId: PropTypes.number.isRequired,
  }

  state = {
    open: false,
  }

  render() {
    const {
      commentId,
    } = this.props

    return (
      <>
        <button onClick={ this.viewComments }
                className={blog.button}>
          { this.state.open ? 'HIDE COMMENTS' : 'SHOW COMMENTS' }
        </button>
        { this.state.open
          ? <Comments commentId={ commentId }/>
          : <></>
        }
      </>
    )
  }

  viewComments = () => {
    this.setState( prevState => ({
      open: !prevState.open,
    }) )
  }
}


export default ViewCommentsButton
