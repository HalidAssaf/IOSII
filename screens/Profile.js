import React, { useState,useEffect} from 'react';
import { View, TextInput, Button ,StyleSheet,Dimensions,Text,TouchableOpacity,ActivityIndicator,Alert} from 'react-native';
import firebase from '@react-native-firebase/app';
import strings from '../strings/translation';
import '@react-native-firebase/database';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
import Snackbar from "react-native-snackbar"
import CustomAlert from '../screens/Customalert';


const Profile = () => {
  const [language, setLanguage] = useState(strings.getLanguage());
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const currentLanguage = strings.getLanguage();
    if (currentLanguage !== language) {
      setLanguage(currentLanguage);
    }
  }, []);

  const handleSave = () => {
    if (fullName=="")
    {
      Snackbar.show({
        text:strings.empty_full_name,
        duration: Snackbar.LENGTH_SHORT,
        numberOfLines: 2,
        textColor: '#fff',
        backgroundColor: '#cc0000'
      });
    return false;

    }
    else if (email==""){
      Snackbar.show({
        text:strings.emptyEmail,
        duration: Snackbar.LENGTH_SHORT,
        numberOfLines: 2,
        textColor: '#fff',
        backgroundColor: '#cc0000'
      });
    return false;
    }
    else if (address==""){
      Snackbar.show({
        text: strings.empty_address,
        duration: Snackbar.LENGTH_SHORT,
        numberOfLines: 2,
        textColor: '#fff',
        backgroundColor: '#cc0000'
      });
    return false;
  }
    else
    {
      setLoading(true);
const user = firebase.auth().currentUser;
if (user) {
  firebase
    .database()
    .ref(`users/${user.uid}`)
    .set({
      fullName,
      email,
      address,
    })
    .then(() => {
      setLoading(false);
      setShowAlert(true);
    })
    .catch((error) => {
      console.log("Error saving user data: ", error);
      setLoading(false);
    });
} else {
  setLoading(false);
  console.log("Network Error");
}
    } 
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={strings.fullname}
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        placeholder={strings.email}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder={strings.address}
        value={address}
        onChangeText={setAddress}
        multiline
        style={[styles.input, styles.addressInput]}
      />
       <TouchableOpacity style={styles.button} onPress={handleSave}>
       {loading ? (
                  <ActivityIndicator size="small" color="black" />
                ) : (
                  <Text style={styles.buttonText}>{strings.save}</Text>
                )}
      </TouchableOpacity>
      <CustomAlert visible={showAlert} message="User data updated" onClose={() => setShowAlert(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    fontWeight: 'bold',
    color:"red",
    fontSize: 18,
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
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
  addressInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 8,
  },
  
});

export default Profile;