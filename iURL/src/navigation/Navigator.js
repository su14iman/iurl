
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../utils/colors';

import {Login} from '../screens/Login';
import {SingUp} from '../screens/SingUp';

import {ViewLink} from '../screens/ViewLink';

import {CheckAuth} from '../screens/CheckAuth';

import TapNavi from './Tap';



const Stack = createStackNavigator();

export const Navigator = () => {
  

  return (
    <NavigationContainer>
        
        <Stack.Navigator
            initialRouteName="CheckAuth"
            screenOptions={{ 
                headerStyle: { 
                    backgroundColor: colors.red
                },
                headerTitleStyle:{
                    color: colors.whith,
                    fontSize:20,
                    
                },
                

            }}
        >
          
        <Stack.Screen 
            name="CheckAuth" 
            component={CheckAuth} 
            options={{
                headerShown: false
              }}
        />
        <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{
                title: 'Login Page',
                headerLeft: null,
            }}
        />
          
        <Stack.Screen
            name="SingUp"
            component={SingUp}
            options={{
                title:'Home Page',
                headerLeft: null,
            }}
        />

        <Stack.Screen
            name="TapNavi"
            component={TapNavi}
            options={{
                title: 'Page Title',
                headerLeft: null,
            }}
            
        />

        <Stack.Screen
            name="ViewLink"
            component={ViewLink}
            options={{
                title: 'Page Title',
                headerLeft: null,
            }}
            
        />


        </Stack.Navigator>
      </NavigationContainer>
  );
};


