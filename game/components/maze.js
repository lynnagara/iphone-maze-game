'use strict';

var React = require('react-native');
var Store = require('../stores/store');
var Constants = require('../constants/constants');
var Timer = require('./timer');
var Ball = require('./ball');

var {
  Text,
  View,
  StyleSheet
} = React;

var Maze = React.createClass({
  render: function() {
    var _maze = Store.getMaze();
    var mazeElement = _maze.tiles.map(function(r, i) {
      var row = r.map(function(col, j) {
        var stylesArr = [styles.tile];

        ['top', 'bottom', 'left', 'right'].forEach(function(direction) {
          if (col[direction]) {
            stylesArr.push(styles[direction])
          }
        });

        return (<View key={j} style={stylesArr}><Text>{col.order}</Text></View>)
      });

      return (<View key={i} style={styles.row}>{row}</View>)
    });

    return (
      <View>
        {mazeElement}
        <Ball />
      </View>
    );
  }

});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D6F3FF',
  },
  tile: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
    width: Constants.sizes.tile,
    height: Constants.sizes.tile,
    borderColor: '#004766'
  },
  top: {
    borderTopWidth: 1
  },
  bottom: {
    borderBottomWidth: 1
  },
  left: {
    borderLeftWidth: 1
  },
  right: {
    borderRightWidth: 1
  }
});

module.exports = Maze;
