import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postsFetchData } from '../../fetch/fetchPost'
import ViewCommentsButton from '../ViewCommentsBtn'
import SearchPostBar from '../SearchPostBar'
import RemovePost from '../RemovePost'
import removePost from '../../actions/removePost'
import LikePost from '../LikePost'
import DislikePost from '../DislikePost'
import likePost from '../../actions/likePost'
import dislikePost from '../../actions/dislikePost'
import {FILTER_MODE_ALL, FILTER_MODE_LIKE, FILTER_MODE_DISLIKE, FILTER_MODE_ALPHABET, FILTER_MODE_RESET } from '../../constants/index'
import Filter from '../Filter'

import blog from './style.module.css'

class Posts extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    failureRequest: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  state = {
    filter: FILTER_MODE_ALL
  }

  componentDidMount() {
    if ( this.props.posts.length === 0 ) {
      this.props.fetchData()
    }
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
    let {
      failureRequest,
      isLoading
    } = this.props

    const posts = this.getTodoList()
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
          <Link to={ `/create-post` }>
            <button>
              Create new post
            </button>
          </Link>
        </div>
        <div className={ blog.sorting }>
          <Filter
            filterLike={ this.filterLike }
            filterDislike={ this.filterDislike }
            filterAll={ this.filterAll }
            filterAlphabet={ this.filterAlphabet }
            filterReset={ this.filterReset }/>
          {/*<button className={blog.sorting__item}>По алфавиту</button>*/ }
        </div>
        <SearchPostBar/>
        <ul>
          { posts.map( ( post ) => (
            <li key={ post.id }>
              <Link to={ `post-information/${ post.id }` }>
                <h2>{ post.title }</h2>
                <p>{ post.body }</p>
              </Link>
              <RemovePost removePost={ () => this.props.removePost( post.id ) }/>
              <Link to={ `/edit-post/${ post.id }` }>
                <button>
                  Edit post
                </button>
              </Link>
              <LikePost likePost={ () => this.props.likePost( post.id ) }/>
              <DislikePost dislikePost={ () => this.props.dislikePost( post.id ) }/>
              <ViewCommentsButton commentId={ post.id }/>
            </li>
          ) ) }
        </ul>
      </section>
    )
  }

  getTodoList = () => {
    switch ( this.state.filter ) {
      case FILTER_MODE_ALL:
        return this.props.posts
      case FILTER_MODE_LIKE:
        return this.props.posts.filter( todoItem => todoItem.like )
      case FILTER_MODE_DISLIKE:
        return this.props.posts.filter( todoItem => todoItem.dislike )
      case FILTER_MODE_ALPHABET:
        return this.props.posts.sort( function( a, b ) {
          var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
          if ( titleA < titleB )
            return -1
          if ( titleA > titleB )
            return 1
          return 0
        } )
      case FILTER_MODE_RESET:
        return this.props.posts.sort( function( a, b ) {
          var idA = a.id, idB = b.id
          return idA - idB
        } )
      default:
        break;
    }
  }

  filterAll = () => {
    this.setState({filter: FILTER_MODE_ALL})
  }
  filterLike = () => {
    this.setState({filter: FILTER_MODE_LIKE})
  }
  filterDislike = () => {
    this.setState({filter: FILTER_MODE_DISLIKE})
  }
  filterAlphabet = () => {
    this.setState({filter: FILTER_MODE_ALPHABET})
  }
  filterReset = () => {
    this.setState({filter: FILTER_MODE_RESET})
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.data.filter(post => post.title.includes(state.filterPosts)),
    failureRequest: state.posts.error,
    isLoading: state.posts.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(postsFetchData(url)),
    removePost: (id) => dispatch(removePost(id)),
    likePost: (id) => dispatch(likePost(id)),
    dislikePost: (id) => dispatch(dislikePost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
