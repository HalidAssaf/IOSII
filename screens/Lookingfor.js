import React,{useEffect,useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import strings from '../strings/translation';

const Lookingfor = () => {
  const [language, setLanguage] = useState(strings.getLanguage());

  useEffect(() => {
    const currentLanguage = strings.getLanguage();
    if (currentLanguage !== language) {
      setLanguage(currentLanguage);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{strings.gun_diet_list}</Text>
      <Text style={styles.text}>{strings.morning}</Text>
      <Text style={styles.text}>{strings.lunch}</Text>
      <Text style={styles.text}>{strings.aktam}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    borderRadius:10,
    backgroundColor: 'lightblue',
    fontSize:20,
    textAlign: 'center',
    marginBottom: 15,
    color:'black'
   
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Lookingfor;
