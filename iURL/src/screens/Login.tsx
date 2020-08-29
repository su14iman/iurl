import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
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
import {ApplicationState, onLogin} from '../redux';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {profile, error} = useSelector(
    (state: ApplicationState) => state.authReducer,
  );

  const {accessToken} = profile;

  useEffect(() => {
    // console.log('User Data:' + Token);
    if (accessToken !== undefined) {
      // navigation.push('Home');
    }
  }, [accessToken]);

  const onTapLogin = () => {
    dispatch(onLogin(email, password));
  };
  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          marginBottom: 5,
        }}>
        <Image
          source={{
            uri: 'https://icon-library.net/images/icon-url/icon-url-10.jpg',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
      <Input
        label="Email"
        placeholder="Enter your Em@il"
        onChangeText={setEmail}
        autoFocus
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
          {profile.error}
        </Text>
      )}

      <Button
        title="Login"
        type="solid"
        onPress={onTapLogin}
        buttonStyle={{backgroundColor: colors.black, marginTop: 2}}
        icon={
          <FontAwesomeIcon
            style={{marginLeft: 7}}
            icon={faSignInAlt}
            size={15}
            color={colors.whith}
          />
        }
        iconRight
      />
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
