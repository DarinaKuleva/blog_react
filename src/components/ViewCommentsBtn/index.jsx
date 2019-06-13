import React from 'react'
import Comments from '../Comments'
import PropTypes from 'prop-types'

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
        <button onClick={ this.viewComments }>
          { this.state.open ? 'hide comments' : 'show comments' }
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
