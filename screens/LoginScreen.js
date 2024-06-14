import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Dimensions,Image,ActivityIndicator, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import strings from '../strings/translation';
import firebase from '@react-native-firebase/app';
import Snackbar from "react-native-snackbar"
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
import CustomAlert from '../screens/Customalert';



const LoginScreen = ({ navigation }) => {
  const [language, setLanguage] = useState(strings.getLanguage());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return subscriber;
  }, []);
 
  

  useEffect(() => {
    const currentLanguage = strings.getLanguage();
    if (currentLanguage !== language) {
      setLanguage(currentLanguage);
    }
  }, []);

  const handleLogin = () => {
    if (username=="")
    {
      Snackbar.show({
        text: strings.emptyUsername,
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
   
    else
    {
      setLoading(true)
      auth().signInWithEmailAndPassword(username, password)
      .then(() => {
        navigation.navigate("Dashboard")
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        setShowAlert(true)
      });
    
  };
   
   
  };

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('../assets/Do.jpg')} />
      {/* <Text style={styles.heading}>{strings.greeting}</Text> */}
      <TextInput
        style={styles.input}
        placeholder={strings.username}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.password}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
       <View style={styles.row1}>
        <TouchableOpacity onPress={() => navigation.navigate("forgot password") }>
          <Text style={styles.link1}>{strings.forgot_password}?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
      {loading ? (
                  <ActivityIndicator size="small" color="black" />
                ) : (
                  <Text style={styles.buttonText}>{strings.login}</Text>
                )}
      </TouchableOpacity>
      <CustomAlert visible={showAlert} message="Password Incoorect/Too many attempts" onClose={() => setShowAlert(false)} />
      <View style={styles.row}>
        <Text style={styles.Text1}>{strings.dont_have_account}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup Screen") }>
          <Text style={styles.link}>{strings.sign_up}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row1: {
    flexDirection: 'row',
    paddingLeft:height*.2
  },
  link1: {
    color:"black",
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
  row: {
    marginTop:height*.02,
    flexDirection: 'row',
    paddingLeft:height*.06
  },
  Text1: {
    color: 'red',
    fontSize: 16,
},
link: {
  fontWeight: 'bold',
  color:"red",
  fontSize: 18,
},
icon:{
  resizeMode: "contain",
    height: 200,
    marginBottom:height*.02,
    
    
}
});

export default LoginScreen;