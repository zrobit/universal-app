import React from 'react';
// import isDev from 'isdev';
var isDev = true
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../assets/scripts/routes';

function handleRouter(res, props) {
  const html = renderToString(<RouterContext {...props} />);

  res
    .status(200)
    .render('home', {
      build: isDev ? null : '/build',
      root: html,
    });
}

function handleRedirect(res, redirect) {
  res.redirect(302, redirect.pathname + redirect.search);
}

function handleNotFound(res) {
  res.status(404).send('Not Found');
}

function handleError(res, err) {
  res.status(500).send(err.message);
}

export function isoMiddleware(req, res) {
  match({ routes, location: req.url },
    (err, redirect, props) => {
      if (err) handleError(res, err);
      else if (redirect) handleRedirect(res, redirect);
      else if (props) handleRouter(res, props);
      else handleNotFound(res);
    });
}
