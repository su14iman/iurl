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

export const SingUp = () => {
  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

      <Input
        label="Full Name"
        placeholder="Enter your name"
        autoFocus
        leftIcon={
          <FontAwesomeIcon icon={faUser} size={20} color={colors.silver} />
        }
      />

      <Input
        label="Email"
        placeholder="Enter your Em@il"
        autoFocus
        keyboardType="email-address"
        leftIcon={
          <FontAwesomeIcon icon={faUser} size={20} color={colors.silver} />
        }
      />

      <Input
        label="Password"
        placeholder="Enter your Password"
        leftIcon={
          <FontAwesomeIcon icon={faLock} size={20} color={colors.silver} />
        }
        secureTextEntry
      />

      <Input
        label="Re-password"
        placeholder="Re-Password"
        leftIcon={
          <FontAwesomeIcon icon={faLock} size={20} color={colors.silver} />
        }
        secureTextEntry
      />

      <Text
        style={{
          color: colors.redH,
          textAlign: 'center',
          marginBottom: 8,
          marginTop: -10,
        }}>
        {/* Passwords or Email its not match */}
      </Text>

      <Button
        title="Sign Up"
        type="solid"
        buttonStyle={{backgroundColor: colors.orang, marginTop: 8}}
        icon={
          <FontAwesomeIcon
            style={{marginLeft: 7}}
            icon={faPlus}
            size={15}
            color={colors.whith}
          />
        }
        iconRight
      />
    </View>
  );
};
