import React ,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/Dashboard';
import SignupScreen from './screens/SignupScreen';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Looseweight from './screens/Looseweight';
import Lookingfor from './screens/Lookingfor';
import Home from './screens/Home';
import forgotpassword from './screens/forgotpassword';
import FoodCalorie from './screens/FoodCalorie';
import CalorieCalculator from './screens/CalorieCalculator';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import strings from './strings/translation';


const Stack = createStackNavigator();

const firebaseConfig =  {
  apiKey: "AIzaSyDMJGfdIV1_ZzEh4X0KNqpff70RFq-KmG4",
 authDomain: "calcium-1555d.firebaseapp.com",
 databaseURL: "https://calcium-1555d-default-rtdb.firebaseio.com",
 projectId: "calcium-1555d",
 storageBucket: "calcium-1555d.appspot.com",
 messagingSenderId: "858967283990",
 appId: "1:858967283990:web:5abca1f58a9aa68a48d837",
 measurementId: "G-FMY5LFS3FB"
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  const [language, setLanguage] = useState(strings.getLanguage());
  React.useEffect(() => {
    const currentLanguage = strings.getLanguage();
    if (currentLanguage !== language) {
      setLanguage(currentLanguage);
    }
  }, []);
  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'LoginScreen';
  } 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{  headerTitle:strings.loginScreen,headerTitleAlign: 'center' }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerTitle:strings.sign_up,headerTitleAlign: 'center'}}  />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerTitle:strings.dashboard, headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerTitle:strings.profile,headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{headerTitle:strings.search, headerShown: false }}  />
        <Stack.Screen name="forgotpassword" component={forgotpassword} options={{headerTitle:strings.forgot_password,headerTitleAlign: 'center'}}  />
        <Stack.Screen name="Home" component={Home} options={{ headerTitle:strings.home,headerShown: false }}  />
        <Stack.Screen name="Looseweight" component={Looseweight}  options={{ headerTitle:strings.looseweight,headerTitleAlign: 'center' }}/>
        <Stack.Screen name="Lookingfor" component={Lookingfor}  options={{ headerTitle:strings.looking_for,headerTitleAlign: 'center' }}/>
        <Stack.Screen name="FoodCalorie" component={FoodCalorie} options={{headerTitle:strings.foodCalorie,headerTitleAlign: 'center'}} />
        <Stack.Screen name="CalorieCalculator" component={CalorieCalculator} options={{headerTitle:strings.calorieCalculator,headerTitleAlign: 'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
