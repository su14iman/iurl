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

import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState, onLogin, onSignup} from '../redux';

export const SingUp = ({navigation}: any) => {
  const [FullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {user, error, loadingState, login} = useSelector(
    (state: ApplicationState) => state.authReducer,
  );

  useEffect(() => {
    if (login) {
      navigation.push('TapNavi');
    }
  });

  const onTapToSignUp = () => {
    if (FullName != '' && Email != '' && Password != '') {
      // dispatch(onSignup(FullName,Email,Password));
      dispatch(onSignup(FullName, Email, Password));
    }
  };

  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

      <Input
        label="Full Name"
        placeholder="Enter your name"
        onChangeText={setFullName}
        autoFocus
        leftIcon={
          <FontAwesomeIcon icon={faUser} size={20} color={colors.silver} />
        }
      />

      <Input
        label="Email"
        placeholder="Enter your Em@il"
        onChangeText={setEmail}
        keyboardType="email-address"
        leftIcon={
          <FontAwesomeIcon icon={faUser} size={20} color={colors.silver} />
        }
      />

      <Input
        label="Password"
        placeholder="Enter your Password"
        onChangeText={setPassword}
        leftIcon={
          <FontAwesomeIcon icon={faLock} size={20} color={colors.silver} />
        }
        secureTextEntry
      />

      {error !== undefined && (
        <Text
          style={{
            color: colors.redH,
            textAlign: 'center',
            marginBottom: 8,
            marginTop: -10,
          }}>
          {error.message}
        </Text>
      )}

      <Button
        title="Sign Up"
        type="solid"
        onPress={onTapToSignUp}
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
