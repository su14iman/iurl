import React, {useState, useEffect} from 'react';
import {View, StatusBar, AsyncStorage} from 'react-native';
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

export const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {user, error, loadingState, login} = useSelector(
    (state: ApplicationState) => state.authReducer,
  );

  useEffect(() => {
    if (login) {
      navigation.push('TapNavi');
    }
  });

  const onTapLogin = () => {
    dispatch({
      type: 'LOGIN_ATTEMPT',
      payload: true,
    });

    dispatch(onLogin(email, password));
  };

  const onTapToSignUp = () => {
    // dispatch(onLogin(email, password));
    navigation.push('SingUp');
  };

  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

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
          {error.message}
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
        loading={loadingState}
      />
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
