import { Component } from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';

class Button extends Component {
  render() {
    const { label, tripleWidthButton, doubleWidthButton, operationButton, onClick } = this.props;
    const styleButton = [ styles.button ]

    operationButton ? styleButton.push(styles.operationButton) : null;
    doubleWidthButton ? styleButton.push(styles.doubleWidthButton) : null;
    tripleWidthButton ? styleButton.push(styles.tripleWidthButton) : null;
    return (
      <TouchableHighlight onPress={ () => onClick(label) }>
        <Text style={styleButton}>{ label }</Text>
      </TouchableHighlight>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 40,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderColor: '#888'
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231'
  },
  doubleWidthButton: {
    width: (Dimensions.get('window').width / 4) * 2
  },
  tripleWidthButton: {
    width: (Dimensions.get('window').width / 4) * 3
  }
});

export default Button;
