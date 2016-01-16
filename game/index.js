var React = require('react-native');
var HomeScreen = require('./components/home');
var Maze = require('./components/maze');
var store = require('./stores/store');

store.initialize();

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var MoveGame = React.createClass({
  getInitialState: function() {
    return {page: 'HOME'};
  },
  render: function() {
    var currentPage;
    switch(this.state.page) {
      case 'MAZE':
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
    store.addChangeListener(this.startGame);
  },
  startGame: function() {
    console.log(store.getCurrentView())
    this.setState({page: store.getCurrentView()});
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