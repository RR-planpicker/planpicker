import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Linerg,
  ImageBackground,
  Image,
} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/fristPage.png')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          resizeMode: 'center',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 150,
    backgroundColor: '#ffdde1',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 60,
    fontFamily: 'Gugi-Regular',
  },
});
