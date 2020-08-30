import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {DrawerNavigationState} from '@react-navigation/routers';
import {Button, Text, ListItem, Card} from 'react-native-elements';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faEnvelope,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import colors from '../utils/colors.js';
import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState, onLogout, onCheck} from '../redux';

export const Profile = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {user, error, loadingState, login} = useSelector(
    (state: ApplicationState) => state.authReducer,
  );

  const onTapLogout = () => {
    const promiseLogout = new Promise(function (resolve, reject) {
      resolve(dispatch(onLogout()));
    });
    promiseLogout.then(() => {
      navigation.push('Login');
    });
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
              <Text style={{marginLeft: 200}}>{user.fullname}</Text>
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
              <Text style={{marginLeft: 200}}>{user.email}</Text>
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
          loading={loadingState}
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
