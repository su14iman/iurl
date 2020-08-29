import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faPlus, faUser} from '@fortawesome/free-solid-svg-icons';

import colors from '../utils/colors';

import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {AddLink} from '../screens/AddLink';


const Tab = createBottomTabNavigator();

export default function TapNavi() {
    return (
        
        <Tab.Navigator  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                    return (
                        <FontAwesomeIcon icon={faHome} size={20} color={colors.black} />
                    );
                }else if (route.name === 'AddLink') {
                    return (
                        <FontAwesomeIcon icon={faPlus} size={20} color={colors.black} />
                    );
                }else if (route.name === 'Profile') {
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
        
            
          <Tab.Screen name="Home" component={Home} />


          <Tab.Screen name="AddLink" component={AddLink} />
          
          
          <Tab.Screen name="Profile" component={Profile} />
         
        </Tab.Navigator>
      
    );
  }
//   tabBarIcon: <FontAwesomeIcon icon={faLock} size={20} color={colors.silver} />