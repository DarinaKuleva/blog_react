import React from 'react'

import blog from '../Posts/style.module.css'
import findPost from '../../actions/findPost'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SearchPostBar extends React.PureComponent {

  static propTypes = {
    findPost: PropTypes.func.isRequired
  }

  startSearch = () => {
    this.props.findPost( this.searchInput.value )
  }

  resetSearch = () => {
    this.props.findPost( '' )
    this.searchInput.value = ''
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={ ( input ) => {
            this.searchInput = input
          } }
          placeholder="Искать"
          className={ blog.search }
          onKeyDown={ this.handleKeyDown }
        />
        <button onClick={ this.startSearch }>Find post</button>
        <button onClick={ this.resetSearch }>Сбросить поиск</button>
      </div>
    )
  }

  handleKeyDown = ( e ) => {
    if ( e.key === 'Enter' ) this.startSearch()
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    findPost: ( title, body ) => dispatch( findPost( title, body ) ),
  }
}

export default connect( null, mapDispatchToProps )( SearchPostBar )
