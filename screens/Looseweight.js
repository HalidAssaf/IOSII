import { StyleSheet, Text, TouchableOpacity, View,Dimensions, Linking } from 'react-native';
import React, { useState,useEffect } from 'react';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
import strings from '../strings/translation';


const Looseweight = () => {
    const [language, setLanguage] = useState(strings.getLanguage());

    useEffect(() => {
        const currentLanguage = strings.getLanguage();
        if (currentLanguage !== language) {
          setLanguage(currentLanguage);
        }
      }, []);
      
      const handleCall = () => {
        const phoneNumber = '+905550933341'; // Replace with the desired phone number
        
        // Check if the device supports making phone calls
        Linking.canOpenURL('tel:' + phoneNumber)
          .then((supported) => {
            if (supported) {
              // Open the dial pad with the specified phone number
              Linking.openURL('tel:' + phoneNumber);
            } else {
              console.log('Phone calls not available');
            }
          })
          .catch((error) => console.log('An error occurred', error));
      };
      

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
       {strings.weightLossExplanation}
      </Text>
      <Text style={styles.text1}>
        {strings.weightLossInfo}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleCall}>
  <Text style={styles.buttonText}>{strings.call}</Text>
</TouchableOpacity>
    </View>
  );
};

export default Looseweight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text1:{
    backgroundColor: 'lightblue',
    fontSize:18,
    borderRadius:10,
    color:'black'
  },
  text: {
    borderRadius:10,
    backgroundColor: 'lightblue',
    fontSize:20,
    textAlign: 'center',
    marginBottom: 15,
    color:'black'
   
  },
  button: {
    marginTop:25,
    width:width*.8,
    height:height*.06,
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
