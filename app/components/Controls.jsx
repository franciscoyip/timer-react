var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus){
    return function(){
      this.props.onStatusChange(newStatus);
    }.bind(this);
  },
  render: function(){
    var {countdownStatus} = this.props;

    var renderControlButton = function(){
      switch (countdownStatus) {
        case 'started':
          return (
            <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
          );
          break;
        case 'paused':
          return (
            <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
          );
          break;
        case 'stopped':
            return (
              <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            );
            break;
        default:
          break;
      }
      /*
      if(countdownStatus === 'started'){
        //pause button
      }else if(countdownStatus === 'paused'){
        //start
      }
      */
    }.bind(this);

    return (
      <div className="controls">
        {renderControlButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  },
});

module.exports = Controls;
