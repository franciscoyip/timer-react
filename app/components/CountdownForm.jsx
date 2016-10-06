var React = require('react');

var CountdownForm = React.createClass({
  propTypes: {
    onSetCountdown: React.PropTypes.func.isRequired
  },
  onSubmit: function(e){
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;
    //^ check from start
    //$ check till the end
    if(strSeconds.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds));
    }
  },
  render: function(){
    return (
      <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
        <input type="number" ref="seconds" placeholder="Enter time in seconds"/>
        <button className="button expanded">Start</button>
      </form>
    );
  }
});

module.exports = CountdownForm;
