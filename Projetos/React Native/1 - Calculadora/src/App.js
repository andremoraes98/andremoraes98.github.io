import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { ...initialState }
  }


  clearDisplay = () => {
    this.setState({
      ...initialState
    });
  }

  showDigitOnDisplay = (digit) => {
    const { displayValue, clearDisplay, values, current } = this.state;

    
    const isDisplayWillClear = displayValue === '0' || clearDisplay
    
    if (digit === '.' && !isDisplayWillClear && displayValue.includes('.')) {
      return
    }

    const currentValue = isDisplayWillClear ? '' : displayValue;

    const displayText = `${currentValue}${digit}`

    this.setState({
      displayValue: displayText,
      clearDisplay: false,
    });

    if (digit !== '.') {
      const newValue = parseFloat(displayText);
      const value = [...values];
      value[current] = newValue;
      this.setState({
        values: value,
      });
    }
  }

  setOperation = (operation) => {
    if (this.state.current === 0) {
      this.setState({
        operation,
        current: 1,
        clearDisplay: true,
      });
    } else {
      const equals = operation === '='
      const newValues = [...this.state.values]
      try {
        newValues[0] = eval(`${newValues[0]} ${this.state.operation} ${newValues[1]}`);
      } catch(e) {
        newValues[0] = this.state.values[0];
      }
      newValues[1] = 0
      
      this.setState({
        displayValue: `${newValues[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values: newValues,
      });
    }

  }

  render() {
    const { displayValue } = this.state;
    return (
      <View style={styles.container}>
        <Display value={ displayValue } />
        <View style={styles.buttons}>

          <Button
            label="AC"
            tripleWidthButton={ true }
            onClick={ this.clearDisplay }
          />

          <Button
            label="/"
            operationButton={ true }
            onClick={ this.setOperation }
          />

          <Button
            label="7"
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="8"
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="9"
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="*"
            operationButton={ true }
            onClick={ this.setOperation }
          />

          <Button
            label="4"
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="5"
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="6"
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="-"
            operationButton={ true }
            onClick={ this.setOperation }
          />

          <Button
            label="1"
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="2"
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="3"
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="+"
            operationButton={ true }
            onClick={ this.setOperation }
          />

          <Button
            label="0"
            doubleWidthButton={ true }
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="."
            onClick={ this.showDigitOnDisplay }
          />

          <Button
            label="="
            operationButton={ true }
            onClick={ this.setOperation }
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
