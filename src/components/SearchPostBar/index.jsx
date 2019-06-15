import React from 'react'

import search from './style.module.css'
import findPost from '../../actions/findPost'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SearchPostBar extends React.PureComponent {

  static propTypes = {
    findPost: PropTypes.func.isRequired,
  }

  startSearch = () => {
    this.props.findPost(this.searchInput.value)
  }

  resetSearch = () => {
    this.props.findPost('')
    this.searchInput.value = ''
  }

  render() {
    return (
      <section className={search.container}>
        <input
          type="text"
          ref={(input) => {
            this.searchInput = input
          }}
          placeholder="Search..."
          className={search.input}
          onKeyDown={this.handleKeyDown}
        />
          <button onClick={this.resetSearch}
                  className={search.resetSearch_button}>
          </button>
        <button onClick={this.startSearch}
                className={search.find_button}>
        </button>
      </section>
    )
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') this.startSearch()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findPost: (title, body) => dispatch(findPost(title, body)),
  }
}

export default connect(null, mapDispatchToProps)(SearchPostBar)
