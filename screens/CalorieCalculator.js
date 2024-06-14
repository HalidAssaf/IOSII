import { StyleSheet, TextInput, View, TouchableOpacity, Text,Alert,ActivityIndicator } from 'react-native'
import React, { useState ,useEffect} from 'react'
import Snackbar from "react-native-snackbar"
import firebase from '@react-native-firebase/app';
import strings from '../strings/translation';
import '@react-native-firebase/database';

const CalorieCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [calories, setCalories] = useState('');
  const [language, setLanguage] = useState(strings.getLanguage());

  useEffect(() => {
    const currentLanguage = strings.getLanguage();
    if (currentLanguage !== language) {
      setLanguage(currentLanguage);
    }
  }, []);
  const calculateCalories = () => {

    if (age=="")
    {
      Snackbar.show({
        text: 'Empty Age',
        duration: Snackbar.LENGTH_SHORT,
        numberOfLines: 2,
        textColor: '#fff',
        backgroundColor: '#cc0000'
      });
    return false;

    }
    else if (height==""){
      Snackbar.show({
        text: 'Empty Height',
        duration: Snackbar.LENGTH_SHORT,
        numberOfLines: 2,
        textColor: '#fff',
        backgroundColor: '#cc0000'
      });
    return false;

    }
    else if (weight==""){
      Snackbar.show({
        text: 'Empty Weight',
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
      const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      const calculatedCalories = BMR * 1.2; // assuming light activity level
      const caloriesStr = calculatedCalories.toFixed(2);
  
      // Write the calories to Firebase Realtime Database
      const user = firebase.auth().currentUser;
      if (user) {
      firebase.database().ref(`users/${user.uid}`).push({
        age: age,
        height: height,
        weight: weight,
        calories: caloriesStr
      })
      .then(() => {
        Alert.alert(strings.caloriesAddedToDatabase);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log('Error adding calories to Firebase Realtime Database:', error);
      });
  
      setCalories(caloriesStr);
    }
  }
  
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder={strings.agePlaceholder}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder={strings.heightPlaceholder}
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder={strings.weightPlaceholder}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={calculateCalories}>
      {loading ? (
                  <ActivityIndicator size="small" color="black" />
                ) : (
                  <Text style={styles.buttonText}>{strings.calculate}</Text>
                )}
      </TouchableOpacity>

      {calories ? (
        <Text style={styles.result}>{strings.youNeed} {calories} {strings.caloriesPerDay}</Text>
      ) : null}

    </View>
  )
}

export default CalorieCalculator

const styles = StyleSheet.create({
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
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  result: {
    fontSize: 16,
    marginTop: 16,
  },
});
