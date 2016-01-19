var React = require('react-native');
var HomeScreen = require('./components/home');
var Maze = require('./components/maze');
var Constants = require('./constants/constants');

var Store = require('./stores/store');

Store.startGame();

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var MoveGame = React.createClass({
  getInitialState: function() {
    return {page: Constants.views.home};
  },
  render: function() {
    var currentPage;
    switch(this.state.page) {
      case Constants.views.maze:
        currentPage = <Maze />
        break;
      default:
        currentPage = <HomeScreen />
    }

    return (
      <View style={styles.container}>
        {currentPage}
      </View>
    );
  },
  componentDidMount: function() {
    Store.addChangeListener(this.startGame);
  },
  startGame: function() {
    this.setState({page: Store.getCurrentView()});
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('MoveGame', () => MoveGame);