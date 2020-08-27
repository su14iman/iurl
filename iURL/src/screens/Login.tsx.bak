import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextField} from '../components/TextField';
import {Button} from '../components/Button';

import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState, onLogin} from '../redux';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {user} = useSelector((state: ApplicationState) => state.userReducer);

  const {accessToken} = user;

  useEffect(() => {
    // console.log('User Data:' + Token);
    if (accessToken !== undefined) {
      // navigate to Profile or Home page
      // navigation.push('Home');
    }
  }, [accessToken, navigation, user]);

  const onTapLogin = () => {
    dispatch(onLogin(email, password));
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <View style={styles.loginView}>
          <TextField placeholder="Email Id" onTextChange={setEmail} />
          <TextField
            placeholder="Password"
            onTextChange={setPassword}
            isSecure={true}
          />
          <Button title="Login" onTap={onTapLogin} />

          {accessToken !== undefined && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{marginLeft: 20, marginRight: 20, color: 'red'}}>
              {JSON.stringify(user.accessToken)}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
  },
  loginView: {
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
    height: 400,
  },
  footer: {
    flex: 1,
  },
});
