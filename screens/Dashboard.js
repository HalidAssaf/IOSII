import { createDrawerNavigator } from '@react-navigation/drawer';
import strings from '../strings/translation';
import Profile from './Profile';
import Search from './Search';
import Home from './Home';

import React, { useState,useEffect } from 'react';

const Drawer = createDrawerNavigator();

function MyDrawer({navigation}) {

  const [language, setLanguage] = useState(strings.getLanguage());
  useEffect(() => {
    const currentLanguage = strings.getLanguage();
    if (currentLanguage !== language) {
      setLanguage(currentLanguage);
    }
  }, []);
 
  return (
    
    <Drawer.Navigator>
     <Drawer.Screen name={strings.home} component={Home} />
      <Drawer.Screen name={strings.profile} component={Profile} />
      <Drawer.Screen name={strings.search} component={Search} />

    </Drawer.Navigator>
  );
}
export default MyDrawer;