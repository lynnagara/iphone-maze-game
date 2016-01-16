'use strict';

var React = require('react-native');
var Actions = require('../actions/actions.js');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;


var HomeScreen = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
       <Text style={styles.welcome}>
          Hello, world!
        </Text>
        <Text style={styles.instructions}>
          Welcome to tilt game.
        </Text>
        <Text style={styles.instructions}>
          Sink the ball in under 30 seconds to win!{'\n'}
          Press Cmd+R to reload app
        </Text>
        <TouchableHighlight onPress={this.startGame}>
          <Text style={styles.button}>
            Start Timer
          </Text>
        </TouchableHighlight>
 
      </View>
    );
  },
  startGame: function() {
    Actions.startGame();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#FFFF00'    
  }
});


module.exports = HomeScreen;
