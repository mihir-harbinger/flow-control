import React, { Component } from 'react';
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

class FlowControl extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    const { appId, jsKey, masterKey } = KEYS
    Parse.initialize(appId, jsKey, masterKey)
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
      <Navigator 
        style={styles.container}
        initialRoute={{name: 'splash', index: 0}}
        renderScene={this.renderScene}
        configureScene={() => Navigator.SceneConfigs.PushFromRight}
      >
      </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default FlowControl