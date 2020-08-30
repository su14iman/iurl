import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {Card, ListItem, Button, Icon, Text, Image} from 'react-native-elements';

import colors from '../utils/colors.js';

const users = [
  {
    name: 'brynn',
  },
];

export const Home = ({route, navigation}: any) => {
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
