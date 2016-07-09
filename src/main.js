import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'

import {
  StyleSheet,
  Navigator,
  StatusBar,
  View,
  Text
} from 'react-native';

import Parse from 'parse/react-native';
import { KEYS } from './constants'

import Splash from './containers/Splash'
import Home from './containers/Home'

var ROUTES = {
  splash: Splash,
  home: Home
}

var _navigator, _route

const store = configureStore()

class FlowControl extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    const { appId, jsKey, masterKey } = KEYS
    Parse.initialize(appId, jsKey, masterKey)
    // store.dispatch(fetchMaxHeight())
  }
  componentDidMount(){
    StatusBar.setBackgroundColor('#1976D2')
  }
  renderScene(route, navigator){
    _navigator = navigator
    _route = route

    var DynamicRoute = ROUTES[route.name]
    return(
      <DynamicRoute
        route={route}
        navigator={navigator}
      />
    )
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator 
          style={styles.container}
          initialRoute={{name: 'splash', index: 0}}
          renderScene={this.renderScene}
          configureScene={() => Navigator.SceneConfigs.PushFromRight}
        >
        </Navigator>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default FlowControl