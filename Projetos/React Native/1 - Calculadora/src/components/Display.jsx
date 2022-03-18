import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Display extends Component {
  render() {
    const { value } = this.props;
    return (
      <View style={ styles.display }>
        <Text numberOfLines={1} style={styles.displayText}>
          { value }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end'
  },
  displayText: {
    fontSize: 60,
    color: '#fff'
  }
});

export default Display;
