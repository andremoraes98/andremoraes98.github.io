import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Flag extends Component {
  render() {
    const { bigger } = this.props;
    return (
      <View style={ styles.container } >
        <View style={ [styles.flagPole, bigger ? styles.flagPoleBigger : null] }/>
        <View style={ [styles.flag, bigger ? styles.flagBigger : null] }/>
        <View style={ [styles.base, bigger ? styles.baseBigger : null] }/>
        <View style={ [styles.masterBase, bigger ? styles.masterBaseBigger : null] }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flagPole: {
    height: 14,
    width: 2,
    position: 'absolute',
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    backgroundColor: '#F22',
    height: 6,
    width: 7,
    marginLeft: 2,
  },
  base: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginTop: 11,
    marginLeft: 7,
  },
  masterBase: {
    position: 'absolute',
    height: 2,
    width: 12,
    backgroundColor: '#222',
    marginTop: 13,
    marginLeft: 4,
  },
  flagPoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 18,
  },
  flagBigger: {
    height: 12,
    width: 14,
    marginLeft: 4,
  },
  baseBigger: {
    height: 4,
    width: 12,
    marginTop: 22,
    marginLeft: 14,
  },
  masterBaseBigger: {
    height: 4,
    width: 24,
    marginTop: 26,
    marginLeft: 8,
  }
})

export default Flag;
