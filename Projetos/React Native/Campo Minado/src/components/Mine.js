import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Mine extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.coreMine } />
        <View style={ styles.line } />
        <View style={ [styles.line, { transform: [{ rotate: '45deg' }] }] } />
        <View style={ [styles.line, { transform: [{ rotate: '90deg' }] }] } />
        <View style={ [styles.line, { transform: [{ rotate: '135deg' }] }] } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coreMine: {
    height: 11,
    width: 11,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    width: 19,
    height: 2,
    position: 'absolute',
    borderRadius: 3,
    backgroundColor: 'black',
  }
})

export default Mine;
