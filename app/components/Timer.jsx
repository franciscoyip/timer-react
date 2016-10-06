var React = require('react');

var Nav = require('Nav');

var Timer = React.createClass({
   render: function(){
    return (
      <div>
        <Nav/>
        {this.props.children}
      </div>
    );
    },
});

module.exports = Timer;
