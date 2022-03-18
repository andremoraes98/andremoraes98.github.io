import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Field from './Field';

class MineField extends Component {
  render() {
    const { board, onOpenField, onSelectedField } = this.props;
    const rows = board.map((row, rowIndex) => {
      const columns = row.map((column, columnIndex) => {
        return (
          <Field
            { ...column }
            key={columnIndex}
            onOpen={ () => onOpenField(rowIndex, columnIndex)}
            onSelected={ () => onSelectedField(rowIndex, columnIndex) }
          />
        )
      });
      return <View key={ rowIndex } style={ { flexDirection: 'row' } }>{columns}</View>
    });
    return <View style={ styles.container }>{rows}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  }
});

export default MineField
