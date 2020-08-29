import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {Card, ListItem, Button, Icon, Text, Image} from 'react-native-elements';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLock} from '@fortawesome/free-solid-svg-icons';

import colors from '../utils/colors.js';

const users = [
  {
    name: 'brynn',
  },
  {
    name: 'Mohmad',
  },
  {
    name: 'Semo',
  },
  {
    name: 'Ahmad',
  },
];

export const Home = () => {
  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

      {users.map((u, i) => {
        return (
          <View key={i}>
            <Card containerStyle={{backgroundColor: colors.orang}}>
              <Text style={{color: colors.whith}}>{u.name}</Text>
            </Card>
          </View>
        );
      })}
    </View>
  );
};
