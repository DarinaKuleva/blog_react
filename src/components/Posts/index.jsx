import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ViewCommentsButton from '../ViewCommentsBtn'
import SearchPostBar from '../SearchPostBar'
import RemovePost from '../RemovePost'
import LikePost from '../LikePost'
import DislikePost from '../DislikePost'
import postsFetchData from '../../fetch/fetchPost'
import Filter from '../Filter'
import likePost from '../../actions/likePost'
import dislikePost from '../../actions/dislikePost'
import removePost from '../../actions/removePost'
import {
  FILTER_MODE_ALL,
  FILTER_MODE_LIKE,
  FILTER_MODE_DISLIKE,
  FILTER_MODE_ALPHABET,
  FILTER_MODE_RESET,
} from '../../constants/index'

import blog from './style.module.css'

class Posts extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    failureRequest: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  state = {
    filter: FILTER_MODE_ALL,
  }

  componentDidMount() {
    if (this.props.posts.length === 0) {
      this.props.fetchData()
    }
  }

  render() {
    let {
      failureRequest,
      isLoading,
    } = this.props

    const posts = this.getTodoList()

    if (failureRequest) {
      return <p className={blog.error}>Sorry! There was an error loading the posts</p>
    }
    if (isLoading) {
      return <p className={blog.loading}></p>
    }
    return (
      <section className={blog.container}>
        <div className={blog.header}>
          <h1 className={blog.logo}>Blog</h1>
          <div className={blog.sorting}>
            <Filter
              changeFilterMode={this.changeFilterMode}/>
          </div>
          <Link to={`/create-post`}>
            <button className={blog.create}>
              CREATE NEW POST
            </button>
          </Link>
        </div>
        <SearchPostBar/>
        <ul className={blog.posts}>
          {posts.map((post) => (
            <li key={post.id}
                className={blog.posts_item}>
              <div className={blog.post_information}>
                <Link to={`post-information/${post.id}`}>
                  <h2 className={blog.posts_title}>{post.title}</h2>
                  <p className={blog.posts_body}>{post.body}</p>
                </Link>
                <RemovePost removePost={() => this.props.removePost(post.id)}/>
                <Link to={`/edit-post/${post.id}`}>
                  <button className={blog.button}>
                    EDIT POST
                  </button>
                </Link>
                <ViewCommentsButton commentId={post.id}/>
              </div>
              <div className={blog.posts_rating}>
                <LikePost likePost={() => this.props.likePost(post.id)} like={ post.like}/>
                <DislikePost dislikePost={() => this.props.dislikePost(post.id)} dislike={ post.dislike}/>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  getTodoList = () => {
    switch (this.state.filter) {
      case FILTER_MODE_ALL:
        return this.props.posts
      case FILTER_MODE_LIKE:
        return this.props.posts.filter(todoItem => todoItem.like)
      case FILTER_MODE_DISLIKE:
        return this.props.posts.filter(todoItem => todoItem.dislike)
      case FILTER_MODE_ALPHABET:
        return this.props.posts.sort(function(a, b) {
          const titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
          if (titleA < titleB)
            return -1
          if (titleA > titleB)
            return 1
          return 0
        })
      case FILTER_MODE_RESET:
        return this.props.posts.sort(function(a, b) {
          const idA = a.id, idB = b.id
          return idA - idB
        })
      default:
        break
    }
  }

  changeFilterMode = (filterMode) => {
    this.setState({filter: filterMode})
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.data.filter(post => post.title.includes(state.filterPosts)),
    failureRequest: state.posts.error,
    isLoading: state.posts.loading,
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
