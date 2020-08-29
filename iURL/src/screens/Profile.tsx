import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {DrawerNavigationState} from '@react-navigation/routers';
// import {Button, FormInput, FormLabel} from 'react-native-elements';
import {Button, Text, ListItem, Card} from 'react-native-elements';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faEnvelope,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import colors from '../utils/colors.js';
import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState, onLogin, onLogout} from '../redux';

export const Profile = () => {
  const dispatch = useDispatch();
  const {user, error, LoginLoading, accessToken, login} = useSelector(
    (state: ApplicationState) => state.authReducer,
  );

  const onTapLogout = () => {
    dispatch(onLogout);
    // navigation.push('Login');
    console.log();
  };

  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

      <Card>
        <Card.Title>You'r Profile</Card.Title>
        <Card.Divider />

        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>
              <View>
                <FontAwesomeIcon
                  style={{marginRight: 7}}
                  icon={faUser}
                  size={15}
                  color={colors.black}
                />
              </View>
              <Text style={{marginLeft: 200}}>Sulaiman Sulaiman</Text>
            </ListItem.Title>
            <ListItem.Title>
              <View>
                <FontAwesomeIcon
                  style={{marginRight: 7}}
                  icon={faEnvelope}
                  size={15}
                  color={colors.black}
                />
              </View>
              <Text style={{marginLeft: 200}}>semoo@dr.com</Text>
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            backgroundColor: colors.leyla,
          }}
          title="Logout"
          onPress={onTapLogout}
          iconRight
          icon={
            <FontAwesomeIcon
              style={{marginLeft: 7}}
              icon={faSignOutAlt}
              size={15}
              color={colors.whith}
            />
          }
        />
      </Card>
    </View>
  );
};
