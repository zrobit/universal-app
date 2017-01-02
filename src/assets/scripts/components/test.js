import React, { Component } from 'react';

export default class Test extends Component {

  // static fetchData() {} // will be used for server side rendering

  render() {
    return (
      <div>
        <h2>Test</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    );
  }
}


