import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Provider, observer} from "mobx-react";
import searchStore from './stores/searchStore';

import { Router, browserHistory } from 'react-router';
import routes from './routes'

import Main from './components/main';

// const stores = {searchStore};

@observer
class App extends Component {
  render() {
    return (
        <Router routes={routes} history={browserHistory} />
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
