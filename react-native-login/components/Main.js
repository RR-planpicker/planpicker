import React, {Component} from 'react';
import {Router, Scene, Actions, ActionConst} from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import TestC from '../react-native-calendars/calendar/index';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="loginScreen"
            component={LoginScreen}
            animation="fade"
            hideNavBar={true}
            initial={true}
          />
          <Scene
            key="secondScreen"
            component={TestC}
            animation="fade"
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
}
