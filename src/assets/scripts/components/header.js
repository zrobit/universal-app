import React, { Component } from 'react';
import Search from './search';
import {observer} from "mobx-react";

@observer
class Header extends Component {
  render() {
    return (
      <div>
        <div>title</div>
        <Search/>
      </div>
    )
  }
}

export default Header
