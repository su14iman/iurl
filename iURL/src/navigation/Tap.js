import React ,{useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faPlus, faUser} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../redux';

import colors from '../utils/colors';
import {ScreensPrep,Home,Profile,AddLink} from '../screens';

import {getHeaderTitle} from '../utils/titlePages';




const Tab = createBottomTabNavigator();

export default function TapNavi({route, navigation}: any) {
  
  const {user} = useSelector(
    (state: ApplicationState) => state.authReducer,
  );
  
  useLayoutEffect(() => { // Set Header Title
      navigation.setOptions({ headerTitle: getHeaderTitle(route,user.fullname) });
  }, [navigation, route]);

    return (
        
        <Tab.Navigator  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === ScreensPrep.Home.name) {
                    return (
                        <FontAwesomeIcon icon={faHome} size={20} color={colors.black} />
                    );
                }else if (route.name === ScreensPrep.AddLink.name) {
                    return (
                        <FontAwesomeIcon icon={faPlus} size={20} color={colors.black} />
                    );
                }else if (route.name === ScreensPrep.Profile.name) {
                    return (
                        <FontAwesomeIcon icon={faUser} size={20} color={colors.black} />
                    );
                }
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.red,
            inactiveTintColor: colors.black,
          }}
        
        >
        
            
          <Tab.Screen name={ScreensPrep.Home.name} component={Home}  />


          <Tab.Screen name={ScreensPrep.AddLink.name} component={AddLink} />
          
          
          <Tab.Screen name={ScreensPrep.Profile.name} component={Profile} />
         
        </Tab.Navigator>
      
    );
  }
