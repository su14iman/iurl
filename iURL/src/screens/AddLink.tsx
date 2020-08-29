import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
// import {Button, FormInput, FormLabel} from 'react-native-elements';
import {Button, Text, Input, Image} from 'react-native-elements';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTag, faUser, faLink, faPlus} from '@fortawesome/free-solid-svg-icons';

import colors from '../utils/colors.js';

export const AddLink = () => {
  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

      <Input
        label="Name"
        placeholder="Enter name for linke"
        autoFocus
        leftIcon={
          <FontAwesomeIcon icon={faTag} size={20} color={colors.silver} />
        }
      />

      <Input
        label="Link"
        placeholder="https://google.com"
        leftIcon={
          <FontAwesomeIcon icon={faLink} size={20} color={colors.silver} />
        }
      />

      <Button
        title="Add"
        type="solid"
        buttonStyle={{backgroundColor: colors.green, marginTop: 2}}
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
