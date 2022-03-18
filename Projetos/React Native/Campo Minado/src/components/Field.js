import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import params from '../params';
import Flag from './Flag';
import Mine from './Mine';

class Field extends Component {
  render() {
    const { mined, opened, nearMines, exploded, flagged, onOpen, onSelected } = this.props;
    const styleField = [styles.field];
    let color = null;

    opened ? styleField.push(styles.opened) : null;
    
    exploded ? styleField.push(styles.exploded) : null;

    flagged ? styleField.push(styles.flagged) : null;

    ( !opened && !exploded ) ? styleField.push(styles.regular) : null;

    (nearMines > 0)
      ? (
      (nearMines === 1 ) ? color = '#2A28D7' : null, 
      (nearMines === 2 ) ? color = '#2B520F' : null,
      (nearMines > 2 && nearMines < 6 ) ? color = '#F9060A' : null,
      (nearMines >= 6 ) ?  color = '#F221A9' : null
      ) : null;

    return (
      <TouchableWithoutFeedback
        onPress={ onOpen }
        onLongPress={ onSelected }
      >
        <View style={ styleField }>
          { ( !mined && opened && nearMines > 0 )
              ? (
                <Text style={ [ styles.label, { color: color } ] }>
                  {nearMines}
                </Text>
              )
              : null
          }
          { (mined && opened) ? <Mine /> : null }
          { (flagged && !opened) ? <Flag /> : null }
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333'
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: '700',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  }
});

export default Field;
