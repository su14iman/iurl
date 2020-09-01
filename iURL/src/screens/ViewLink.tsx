import React, {useState, useEffect} from 'react';
import {View, StatusBar, Linking} from 'react-native';
// import {Button, FormInput, FormLabel} from 'react-native-elements';
import {Button, Text, Input, Image, Card} from 'react-native-elements';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';

import colors from '../utils/colors.js';
import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState} from '../redux';

export const ViewLink = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {error, OpenLink} = useSelector(
    (state: ApplicationState) => state.linkReducer,
  );

  useEffect(() => {
    navigation.setOptions({headerTitle: OpenLink.Title}); // Set Title Stack
  });

  const onTapURL = async () => {
    // console.log(OpenLink.URL);
    await Linking.openURL(OpenLink.URL);
  };

  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

      <Card>
        <Card.Title>
          {OpenLink.Title}
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
          onPress={onTapURL}
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
