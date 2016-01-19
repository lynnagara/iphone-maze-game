'use strict';

var React = require('react-native');
var Store = require('../stores/store');

var {
  Text,
  View,
  StyleSheet
} = React;

var Maze = React.createClass({
  render: function() {
    var _maze = Store.getMaze();

    var mazeElement = _maze.map(function(r, i) {
      var row = r.map(function(col, j) {
        return (<View key={j} style={styles.tile}><Text>X</Text></View>)
      });

      return (<View key={i} style={styles.row}>{row}</View>)
    });

    return (
      <View>
        <Text>The maze screen</Text>
        {mazeElement}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  tile: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    width: 30,
    height: 30,
    backgroundColor: '#FF0000',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFF00',
  }
});

module.exports = Maze;
