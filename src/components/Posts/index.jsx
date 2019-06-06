import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postsFetchData } from '../../actions/postsFetch'
import ViewCommentsButton from '../ViewCommentsBtn'
import CreatePostBtn from '../CreatePostBtn'

import blog from './style.module.css'

class Posts extends React.PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired, //проверить все ли пропсы+подчеркивание
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetchData( 'https://jsonplaceholder.typicode.com/posts' )
  }

  state = {
    posts: this.props.posts,
    currentPage: 1,
    postsAmount: 10,
  }

  handleClick = ( event ) => {
    this.setState( {
      currentPage: Number( event.target.id ),
    } )
  }

  render() {
    const {
      hasErrored,
      isLoading,
      posts,
    } = this.props

    const {
      currentPage,
      postsAmount,
    } = this.state

    const indexOfLastPost = currentPage * postsAmount
    const indexOfFirstPost = indexOfLastPost - postsAmount
    const visiblePage = posts.slice( indexOfFirstPost, indexOfLastPost )

    const renderPosts = visiblePage.map( ( post ) => {
      return <li key={ post.id }>
        <Link to={ `post-information/${ post.id }` }>
          <h2>{ post.title }</h2>
          <p>{ post.body }</p>
        </Link>
        <ViewCommentsButton commentId={ post.id }/>
      </li>
    } )

    const pagesAmount = []
    for ( let i = 1; i <= Math.ceil( posts.length / postsAmount ); i++ ) {
      pagesAmount.push( i )
    }

    const renderPagesAmount = pagesAmount.map( page => {
      return (
        <button
          key={ page }
          id={ page }
          onClick={ this.handleClick }
        >
          { page }
        </button>
      )
    } )

    if ( hasErrored ) {
      return <p>Sorry! There was an error loading the items</p>
    }
    if ( isLoading ) {
      return <p>Loading…</p>
    }
    return (
      <section className={blog.container}>
        <div className={blog.header}>
          <h1 className={blog.logo}>Blog</h1>
          <CreatePostBtn/>
        </div>
        <div className={blog.sorting}>
          <button className={blog.sorting__item}>По алфавиту</button>
          <button className={blog.sorting__item}>По лайкам</button>
          <button className={blog.sorting__item}>По дизлайкам</button>
          <button className={blog.sorting__item}>Сбросить сортировку</button>
        </div>
        <div>
          <input placeholder="Искать" className={blog.search}/>
        </div>
          <ul>
            { renderPosts }
          </ul>
          <ul>
            { renderPagesAmount }
          </ul>
      </section>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    posts: state.posts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchData: ( url ) => dispatch( postsFetchData( url ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Posts )
