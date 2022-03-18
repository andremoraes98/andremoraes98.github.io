import React, { Component } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class LevelSelection extends Component {
  render() { 
    const { onCancel, isVisible, levelSelected } = this.props;
    return(
      <Modal
        onRequestClose={ onCancel }
        animationType='slide'
        transparent={true}
        visible={ isVisible }
      >
        <View style={ styles.frame }>
          <View style={ styles.container }>
            <Text style={ styles.title }>Selecione o Nível</Text>
            <TouchableOpacity
              style={ [styles.button, styles.backGroundEasy] }
              onPress={ () => levelSelected(0.1) }
            >
              <Text style={ styles.buttonLabel }>Fácil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ [styles.button, styles.backGroundMedium] }
              onPress={ () => levelSelected(0.2) }
            >
              <Text style={ styles.buttonLabel }>Médio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ [styles.button, styles.backGroundHard] }
              onPress={ () => levelSelected(0.3) }
            >
              <Text style={ styles.buttonLabel }>Difícil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  }, 
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  title: {
    fontSize: 30,
    fontWeight: '700'
  },
  button: {
    marginTop: 10,
    padding: 5,
    width: 85
  },
  backGroundEasy: {
    backgroundColor: '#49b65d'
  }, 
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: '700',
    textAlign: 'center',
  },
  backGroundMedium: {
    backgroundColor: '#2765F7'
  },
  backGroundHard: {
    backgroundColor: '#F26337'
  }
});

export default LevelSelection;
