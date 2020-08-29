import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
// import {Button, FormInput, FormLabel} from 'react-native-elements';
import {Button, Text, Input, Image} from 'react-native-elements';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faLock,
  faUser,
  faSignInAlt,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import colors from '../utils/colors.js';

export const Profile = () => {
  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />
      <Text>Hey Profile</Text>
    </View>
  );
};
