Title.js;
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Linerg,
  ImageBackground,
  Image,
  TextInput,
  Button,
} from 'react-native';

export default function Title() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={require('../assets/images/fristPage.png')}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            resizeMode: 'contain',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdde1',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 60,
    fontFamily: 'Gugi-Regular',
  },
});
