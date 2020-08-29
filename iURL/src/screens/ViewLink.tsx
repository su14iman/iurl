import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
// import {Button, FormInput, FormLabel} from 'react-native-elements';
import {Button, Text, Input, Image, Card} from 'react-native-elements';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';

import colors from '../utils/colors.js';

export const ViewLink = () => {
  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

      <Card>
        <Card.Title>
          Name Link
          <View>
            <FontAwesomeIcon
              style={{marginLeft: 7}}
              icon={faLink}
              size={15}
              color={colors.black}
            />
          </View>
        </Card.Title>
        <Card.Divider />

        <Text style={{marginBottom: 10}}>
          You can open your link from Here.
        </Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          titleStyle={{
            color: colors.blue,
          }}
          title="Click "
          type="clear"
        />
      </Card>
    </View>
  );
};
