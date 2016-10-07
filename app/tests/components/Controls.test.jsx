var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var Controls = require('Controls');

describe('Controls', function(){
  it('should exist', function(){
    expect(Controls).toExist();
  });

  describe('rendering', function(){
    it('should render pause button when started', function(){
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pausebtn = $el.find('button:contains(Pause)');
      expect($pausebtn.length).toBe(1);
    });

    it('should render start button when paused', function(){
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startbtn = $el.find('button:contains(Start)');
      expect($startbtn.length).toBe(1);
    });

    /*
    it('should set state to started and countdown to zero only', function(done){
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(function(){
        expect(countdown.state.count).toBe(0);
        done();
      }.bind(this), 2001);
    });
    */
  });

});
