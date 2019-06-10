import React from 'react'
import deletePost from '../../actions/removePost'
import { connect } from 'react-redux'

class RemovePost extends React.PureComponent {
  render() {
    const {
      removeId,
    } = this.props

    return (
      <button onClick={ this.removePost( removeId ) }>
        дилить
      </button>
    )
  }
  removePost = (id) => {
    // this.props.deletePost( id )
  }
}


const mapDispatchToProps = ( dispatch ) => {
  return {
    deletePost: (id) => dispatch( deletePost( id ) ),
  }
}

export default connect( null, mapDispatchToProps )( RemovePost )
