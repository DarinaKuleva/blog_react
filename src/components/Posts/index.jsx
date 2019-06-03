import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postsFetchData } from '../../actions/postsFetch'
import ViewCommentsButton from '../ViewCommentsBtn'
import CreatePostBtn from '../CreatePostBtn'

import blog from './style.module.css'

class Posts extends PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired, //проверить все ли пропсы+подчеркивание
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetchData( 'https://jsonplaceholder.typicode.com/posts' )
  }

  state = {
    open: false,
  }

  render() {
    const {
      hasErrored,
      isLoading,
      posts,
    } = this.props

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
          { posts.map( ( post ) => (
            <li key={ post.id }>
              <Link to={ `post-information/${ post.id }` }>
                <h2>{ post.title }</h2>
                <p>{ post.body }</p>
              </Link>
              <ViewCommentsButton commentId={ post.id }/>
            </li>
          ) ) }
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
