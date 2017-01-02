import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import Header from "./header";

import { Link } from 'react-router'

@observer
class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Link to="/test">Test</Link>
        <Link to="/">Home</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Main
