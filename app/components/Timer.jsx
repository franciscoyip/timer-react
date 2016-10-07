var React = require('react');

//components
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({
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
  //get called before removed from the document
  componentWillUnmount: function(){
    //Clean up the timer
    clearInterval(this.timer);
    this.timer = null;
  },
  handleStatusChange: function(newStatus){
    this.setState({
      countdownStatus: newStatus
    });
  },
  startTimer: function(){
    var self = this;
    this.timer = setInterval(function(){
      var newCount = self.state.count + 1;
      self.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 10000){
        self.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  render: function(){
    var {count, countdownStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  },
});

module.exports = Timer;
