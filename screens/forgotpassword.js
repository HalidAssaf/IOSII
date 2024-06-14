import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, Alert ,StyleSheet,TouchableOpacity,Text,ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import strings from '../strings/translation';
import Snackbar from "react-native-snackbar"

const forgotpassword = () => {
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState(strings.getLanguage());
    const [email, setEmail] = useState('');

    useEffect(() => {
        const currentLanguage = strings.getLanguage();
        if (currentLanguage !== language) {
          setLanguage(currentLanguage);
        }
      }, []);

    const handlePasswordReset = async () => {
        setLoading(true)
        if (email=="")
        {
          setLoading(false)
          Snackbar.show({
            text: strings.emptyEmail,
            duration: Snackbar.LENGTH_SHORT,
            numberOfLines: 2,
            textColor: '#fff',
            backgroundColor: '#cc0000'
          });
        return false;
    
        }
        else {
            try {
                await auth().sendPasswordResetEmail(email);
                Alert.alert('Password Reset Email Sent', 'Please check your email to reset your password.');
                setLoading(false)
              } catch (error) {
                setLoading(false)
                Alert.alert('Error', error.message);
              }
        }
     
    };

  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <TextInput
        style={styles.input}
        placeholder={strings.email}
        value={email}
        onChangeText={setEmail}
      />
         <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
      {loading ? (
                  <ActivityIndicator size="small" color="black" />
                ) : (
                  <Text style={styles.buttonText}>{strings.forgot_password}</Text>
                )}
      </TouchableOpacity>
      </View>
    );
  };

export default forgotpassword

 const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 48,
        marginBottom: 16,
        padding: 12,
        color:"black",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
      },
      button: {
        marginTop:10,
        width: '80%',
        height: 48,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
      },
      buttonText: {
        fontSize: 16,
        color: '#fff',
      },

 })