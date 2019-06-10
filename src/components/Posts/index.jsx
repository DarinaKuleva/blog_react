import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postsFetchData } from '../../actions/postsFetch'
import ViewCommentsButton from '../ViewCommentsBtn'
import CreatePostBtn from '../CreatePostBtn'
import SearchPostBar from '../SearchPostBar'
import RemovePost from '../RemovePost'

import blog from './style.module.css'

class Posts extends React.PureComponent {

  static propTypes = {
    posts: PropTypes.array.isRequired, //проверить все ли пропсы+подчеркивание
    failureRequest: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetchData( 'https://jsonplaceholder.typicode.com/posts' )
  }


  // state = {
  //   posts: this.props.posts,
  //   currentPage: 1,
  //   postsAmount: 10,
  // }

  // handleClick = ( event ) => {
  //   this.setState( {
  //     currentPage: Number( event.target.id ),
  //   } )
  // }

  render() {
    const {
      failureRequest,
      isLoading,
      posts,
      newPosts
    } = this.props
    // const {
    //   currentPage,
    //   postsAmount,
    // } = this.state

    // const indexOfLastPost = currentPage * postsAmount
    // const indexOfFirstPost = indexOfLastPost - postsAmount
    // const visiblePage = posts.slice( indexOfFirstPost, indexOfLastPost )

    // const renderPosts = visiblePage.map( ( post ) => {
    //   return <li key={ post.id }>
    //     <Link to={ `post-information/${ post.id }` }>
    //       <h2>{ post.title }</h2>
    //       <p>{ post.body }</p>
    //     </Link>
    //     <ViewCommentsButton commentId={ post.id }/>
    //   </li>
    // } )
    //
    // const pagesAmount = []
    // for ( let i = 1; i <= Math.ceil( posts.length / postsAmount ); i++ ) {
    //   pagesAmount.push( i )
    // }
    //
    // const renderPagesAmount = pagesAmount.map( page => {
    //   return (
    //     <button
    //       key={ page }
    //       id={ page }
    //       onClick={ this.handleClick }
    //     >
    //       { page }
    //     </button>
    //   )
    // } )
    if ( failureRequest ) {
      return <p>Sorry! There was an error loading the items</p>
    }
    if ( isLoading ) {
      return <p>Loading…</p>
    }
    return (
      <section className={ blog.container }>
        <div className={ blog.header }>
          <h1 className={ blog.logo }>Blog</h1>
          <CreatePostBtn/>
        </div>
        <div className={ blog.sorting }>
          <button className={ blog.sorting__item }>По алфавиту</button>
          <button className={ blog.sorting__item }>По лайкам</button>
          <button className={ blog.sorting__item }>По дизлайкам</button>
          <button className={ blog.sorting__item }>Сбросить сортировку</button>
        </div>
        <SearchPostBar/>
        <ul>
          { newPosts.createdPosts.map( ( newPost ) => (
            <li key={ newPost.id }>
              <h2>{ newPost.title }</h2>
              <p>{ newPost.body }</p>
            </li>
          ) ) }
        </ul>
        <ul>
          { posts.map( ( post ) => (
            <li key={ post.id }>
              <Link to={ `post-information/${ post.id }` }>
                <h2>{ post.title }</h2>
                <p>{ post.body }</p>
              </Link>
              <ViewCommentsButton commentId={ post.id }/>
              <RemovePost removeId = { post.id }/>
            </li>
          ) ) }
        </ul>
      </section>
    )
  }
}


const mapStateToProps = ( state ) => {
  return {
    posts: state.posts.filter( post => post.title.includes( state.filterPosts ) ),
    // posts: state.posts,
    // hasErrored: state.posts,
    // isLoading: state.posts,
    newPosts: state.createNewPost,
    failureRequest: state.failureRequestPosts,
    isLoading: state.postsIsLoading
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchData: ( url ) => dispatch( postsFetchData( url ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( Posts )
