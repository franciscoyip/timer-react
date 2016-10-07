var React = require('react');

//components
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
        case 'stopped':
          this.setState({count: 0});
          //let this case also run statements at pause
        case 'paused':
          clearInterval(this.timer);
          this.timer = null;
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
  handleStatusChange: function(newStatus){
    this.setState({
      countdownStatus: newStatus
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
    var {count, countdownStatus} = this.state;
    var self = this;
    var renderControlArea = function(){
      if(countdownStatus !== 'stopped'){
        return (<Controls countdownStatus={countdownStatus} onStatusChange={self.handleStatusChange}/>);
      }else{
        return (<CountdownForm onSetCountdown={self.handleSetCountdown}/>);
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  },
});

module.exports = Countdown;
