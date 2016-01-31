'use strict';

var React = require('react-native');
var Store = require('../stores/store');
var Constants = require('../constants/constants');

var position = {};

var {
  View,
  StyleSheet,
  Animated
} = React;

var SPRING_CONFIG = {tension: 2, friction: 3};

var Ball = React.createClass({
  render: function() {
    return (
      <Animated.View style={this.getStyles()}></Animated.View>
    );
  },
  getStyles: function() {
    var initial = Store.getMaze().initial;
    return [
      styles.ball,
      position
      // { transform: this.state.pan.getTranslateTransform() }
    ];
  },
  getInitialState: function() {
    return {
      pan: new Animated.ValueXY()
    }
  },
  componentWillMount: function() {
    var initial = Store.getMaze().initial;
    position.top = (initial[0] * Constants.sizes.tile);
    position.left = (initial[1] * Constants.sizes.tile);

    // Animated.spring(this.state.pan, {
    //   ...SPRING_CONFIG,
    //   toValue: {x: 0, y: Constants.sizes.tile * 2}
    // }).start();
  }

});


var styles = StyleSheet.create({
  ball: {
    margin: (Constants.sizes.tile - Constants.sizes.ball) / 2,
    position: 'absolute',
    width: Constants.sizes.ball,
    height: Constants.sizes.ball,
    borderRadius: Constants.sizes.ball / 2,
    backgroundColor: '#FF0000'
  }
});

module.exports = Ball;