var React = require('react');

//components
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped' //pause started
    };
  },
  //listen state got change, will call by react
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      var status = this.state.countdownStatus;
      switch (status) {
        case 'started':
          this.startTimer();
          break;
        default:
          break;
      }
    }
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  startTimer: function(){
    var self = this;
    this.timer = setInterval(function(){
      var newCount = self.state.count - 1;
      self.setState({
        count: newCount >= 0 ? newCount : 0
      });

    }, 1000);
  },
  render: function(){
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  },
});

module.exports = Countdown;
