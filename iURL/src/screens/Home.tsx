import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Button} from '../components/Button';

export const Home = ({navigation}) => {
  const onTapLogout = () => {
    navigation.push('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <View style={styles.loginView}>
          <Text style={styles.HeadTitle}>Home Page</Text>

          <Button title="Logout" onTap={onTapLogout} />
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
  HeadTitle: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 30,
  },
});
