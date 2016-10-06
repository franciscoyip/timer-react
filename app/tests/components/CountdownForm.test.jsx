var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var CountdownForm = require('CountdownForm');

describe('CountdownForm', function(){
  it('should exist', function(){
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', function(){
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);

    var el = ReactDOM.findDOMNode(countdownForm);
    console.log(el);
    countdownForm.refs.seconds.value = '110';

    TestUtils.Simulate.submit(el);

    expect(spy).toHaveBeenCalledWith(110);
  });

});
