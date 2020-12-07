import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import Test from "./react-native-calendars/calendar/index"
//import Login from './scr/Login';
import Title from './src/Titlt';
import LoginTest from './react-native-login/components/Main';

export default class extends React.Component {
  state = {
    test:true,
    isLoading: true,
  };
  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const {isLoading} = this.state;
    return isLoading ? <Title /> : <LoginTest />;
  }
}
