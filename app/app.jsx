var React = require('react');
var ReactDOM = require('react-dom');

//Router
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Layout components
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}></IndexRoute>
      <Route path="countdown" component={Countdown}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
