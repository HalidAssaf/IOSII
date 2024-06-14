import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity,Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const Customalert = ({visible, message, onClose}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType='fade'
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color:'black'
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    marginTop: 10,
    width:width*0.2
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    justifyContent:'center',
    alignSelf:'center'
  },
});

export default Customalert;
