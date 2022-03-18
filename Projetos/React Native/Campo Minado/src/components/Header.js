import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Flag from './Flag';

class Header extends Component {
  render() {
    const { onFlagPress, flagsLeft, onNewGame } = this.props;
    return (
      <View style={ styles.container }>
        <View style={ styles.flagContainer }>
          <TouchableOpacity
            onPress={ onFlagPress }
            style={ styles.flagButton }
          >
            <Flag bigger />
          </TouchableOpacity>
          <Text style={ styles.flagsLeft }>= { flagsLeft }</Text>
        </View>
        <TouchableOpacity
          style={ styles.button }
          onPress={ onNewGame }
        >
          <Text style={ styles.buttonLabel }>New Game</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EEE',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  flagContainer: {
    flexDirection: 'row'
  },
  flagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  flagsLeft: {
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 5,
    marginLeft: 20
  },
  button: {
    backgroundColor: "#999",
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#DDD',
    fontWeight: '700'
  }
})

export default Header;
