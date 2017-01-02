import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer(['store'])
export default class Posts extends Component {

  static fetchData({ store }) {
    // populate 'list' property of 'PostStore'
    return store.post.find();
  }

  static propTypes = {
    store: React.PropTypes.object,
  };

  render() {
    // retrieve post list data
    const posts = this.props.store.post.list;

    return (
     ...
    );
  }
}
