
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import TapNavi from './Tap';
import {Login,SingUp,ViewLink,CheckAuth} from '../screens';
import colors from '../utils/colors';
import { LinkReducer } from '../redux/reducers/linkReducer';



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
            options={({ route }) => ({
                headerLeft: null,
              })}
        />

        <Stack.Screen
            name="ViewLink"
            component={ViewLink}
        />


        </Stack.Navigator>
      </NavigationContainer>
  );
};


