import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  View,
  KeyboardAvoidingView,
} from 'react-native';

export default class Wallpaper extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="height" style={styles.picture}>
        {this.props.children}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: '#ffdde1',
  },
});
