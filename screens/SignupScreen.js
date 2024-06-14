import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Dimensions,Image,ActivityIndicator,Alert} from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import strings from '../strings/translation';
import Snackbar from "react-native-snackbar"


const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const SignupScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setnumber] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [language, setLanguage] = useState(strings.getLanguage());

  useEffect(() => {
    const currentLanguage = strings.getLanguage();
    if (currentLanguage !== language) {
      setLanguage(currentLanguage);
    }
  }, []);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Snackbar.show({
        text: strings.passwordsDontMatch,
        duration: Snackbar.LENGTH_SHORT,
        numberOfLines: 2,
        textColor: '#fff',
        backgroundColor: '#cc0000'
      });
    return false;
    }
    if (username=="")
    {
      Snackbar.show({
        text:strings.emptyUsername,
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
    else if (number==""){
      Snackbar.show({
        text:strings.empty_number,
        duration: Snackbar.LENGTH_SHORT,
        numberOfLines: 2,
        textColor: '#fff',
        backgroundColor: '#cc0000'
      });
    return false;

    }
    else if (password==""){
      Snackbar.show({
        text: strings.emptyPassword,
        duration: Snackbar.LENGTH_SHORT,
        numberOfLines: 2,
        textColor: '#fff',
        backgroundColor: '#cc0000'
      });
    return false;

    }
    else if (confirmPassword==""){
      Snackbar.show({
        text: strings.emptyConfirmPassword,
        duration: Snackbar.LENGTH_SHORT,
        numberOfLines: 2,
        textColor: '#fff',
        backgroundColor: '#cc0000'
      });
    return false;
  }
    else
    {
      setLoading(true)
      auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        firebase.database().ref('users/' + user.uid).push({
          email: user.email,
          username: username,
          number:number
        });
        setLoading(false)
        Alert.alert(strings.userRegisterSuccess)
        console.log(user);
      })
      .catch((error) => {
        setLoading(false)
        const errorMessage = error.message;
        Alert.alert(errorMessage)
      });
  };
  };
  

  return (
    <View style={styles.container}>
       <Image style={styles.icon} source={require('../assets/cal.jpg')} />
      <TextInput
        style={styles.input}
        placeholder={strings.username}
        value={username}
        onChangeText={setUsername}
      />
        <TextInput
        style={styles.input}
        placeholder={strings.email}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder={strings.number}
        value={number}
        onChangeText={setnumber}
        keyboardType="numeric"
      />
        <TextInput
        style={styles.input}
        placeholder={strings.password}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder={strings.confirm_password}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
      {loading ? (
                  <ActivityIndicator size="small" color="black" />
                ) : (
                  <Text style={styles.buttonText}>{strings.sign_up}</Text>
                )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 48,
    marginBottom: 16,
    padding: 12,
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
  icon:{
    resizeMode: "contain",
      height: height*.2,
      // marginBottom:height*.02,
      
      
  }
});

export default SignupScreen;