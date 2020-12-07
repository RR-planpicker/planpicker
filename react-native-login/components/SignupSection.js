import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

export default class SignupSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>회원이 아니신가요?</Text>
        <Text style={styles.text}>비밀번호를 잊으셨나요?</Text>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: 20,
    marginTop: 15,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
  },
});
