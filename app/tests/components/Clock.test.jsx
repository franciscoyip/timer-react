var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');

var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

//actual Component
var Clock = require('Clock');

describe('Clock', function(){
  it('should exist', function(){
    expect(Clock).toExist();
  });

  describe('formatSeconds', function(){
    it('should format seconds', function(){
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', function(){
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});
