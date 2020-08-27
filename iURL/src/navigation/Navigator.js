
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../utils/colors';
import {Login} from '../screens/Login';
import {Home} from '../screens/Home';

const Stack = createStackNavigator();

export const Navigator = () => {
  

  return (
    <NavigationContainer>
        
        <Stack.Navigator
            initialRouteName="Login"
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
            name="Login" 
            component={Login} 
            options={{
                title: 'Login Page',
                headerLeft: null,
            }}
        />
          
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                title:'Home Page',
                headerLeft: null,
            }}
        />


        </Stack.Navigator>
      </NavigationContainer>
  );
};


