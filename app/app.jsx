var React = require('react');
var ReactDOM = require('react-dom');

var Timer = require('Timer');

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
  <Timer/>,
  document.getElementById('app')
);
