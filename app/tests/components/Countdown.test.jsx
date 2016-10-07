var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var Countdown = require('Countdown');

describe('Countdown', function(){
  it('should exist', function(){
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', function(){
    it('should set state to started and countdown', function(done){
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(function(){
        expect(countdown.state.count).toBe(9);
        done();
      }.bind(this), 1001);
    });

    it('should set state to started and countdown to zero only', function(done){
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(function(){
        expect(countdown.state.count).toBe(0);
        done();
      }.bind(this), 2001);
    });

    it('should pause countdown on paused status', function(done){
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');
      setTimeout(function(){
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }.bind(this), 1001);
    });

    it('should stop countdown on stopped status', function(done){
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');
      setTimeout(function(){
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }.bind(this), 1001);
    });


  });
});
