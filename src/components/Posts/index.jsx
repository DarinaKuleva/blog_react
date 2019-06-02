import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postsFetchData } from '../../actions/postsFetch';

class Index extends Component {
  componentDidMount() {
    this.props.fetchData('https://jsonplaceholder.typicode.com/posts');
  }

  render() {
    const {
      hasErrored,
      isLoading,
      posts
    } = this.props;

    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(postsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
