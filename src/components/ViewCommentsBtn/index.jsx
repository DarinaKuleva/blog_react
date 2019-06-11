import React from 'react'
import Comments from '../Comments'

class ViewCommentsButton extends React.PureComponent {
  state = {
    open: false,
  }
  onClickButton = () => {
    this.setState( prevState => ({
      open: !prevState.open,
    }) )
  }

  render() {
    const {
      commentId,
    } = this.props

    return (
      <>
        <button onClick={ this.onClickButton }>
          { this.state.open ? 'hide comments' : 'show comments' }
        </button>
        { this.state.open
          ? <Comments commentId={ commentId }/>
          : <></>
        }
      </>
    )
  }
}


export default ViewCommentsButton
