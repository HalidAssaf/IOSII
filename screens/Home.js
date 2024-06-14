import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Dimensions,Image} from 'react-native';
import FoodCalorie from './FoodCalorie';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
import strings from '../strings/translation';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({ navigation }) => {

    const [language, setLanguage] = useState(strings.getLanguage());
  useEffect(() => {
    const currentLanguage = strings.getLanguage();
    if (currentLanguage !== language) {
      setLanguage(currentLanguage);
    }
  }, []);

  const signOut = () => {
    auth().signOut()
      .then(() => {
        navigation.navigate("LoginScreen") 
        // console.log('Sign-out successful');
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };
  
  const FoodCalory=()=>{
    navigation.navigate("FoodCalorie")
  }
  const CaloryCalculator=()=>{
    navigation.navigate("CalorieCalculator")
  }
  const LoseWazan=()=>{
    navigation.navigate("Looseweight")
  }
  const FoodLuking=()=>{
    navigation.navigate("Lookingfor")
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image style={styles.icon} source={require('../assets/a.jpg')} />
      </View>
      <View >
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={FoodCalory} >
          <Text style={styles.buttonText}>{strings.food_calorie}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={CaloryCalculator} >
          <Text style={styles.buttonText}>{strings.calorie_calculator}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={LoseWazan} >
          <Text style={styles.buttonText}>{strings.lose_weight}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={FoodLuking} >
          <Text style={styles.buttonText}>{strings.looking_for}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.view2}>
            <TouchableOpacity
              onPress={() => signOut()}
              style={styles.roundButton1}>
                <Icon name="logout" size={30} color="#000" />
            </TouchableOpacity>
          </View>
      </View>
      
     
        
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor:"white"
    
  },
  view2: {
    marginRight: height * .04,
    alignItems: 'flex-end'
  },
  roundButton1: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  icon: {
    resizeMode: "contain",
    height: height * 0.5,
    width: width,
  },
  buttonContainer: {
    // flex: 1,
    flexDirection:"row",
    // alignItems: "center",
    // justifyContent: "flex-end",
    // paddingBottom: 50,  
    marginBottom:height*.01
  },
  button: {
    width: 150,
    height: 100,
    marginRight: 15,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    // marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Home;