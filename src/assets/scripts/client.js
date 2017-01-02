import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, browserHistory, match } from 'react-router';
import { fetchDataOnLocationMatch } from '../../utils/fetch';
import { rehydrate } from './state/hydrate';
import routes from './routes';

const store = rehydrate();
fetchDataOnLocationMatch(browserHistory, routes, match, store);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
