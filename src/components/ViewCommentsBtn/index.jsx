import React from 'react'
import Comments from '../Comments'

import button from '../CreatePostBtn/style.module.css'

class ViewCommentsButton extends React.PureComponent {
  state = {
    open: false,
  }
  onClickButton1 = () => {
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
        <button onClick={ this.onClickButton1 } className={button.page}>
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
