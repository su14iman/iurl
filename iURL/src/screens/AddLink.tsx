import React, {useState, useEffect, useRef} from 'react';
import {View, StatusBar} from 'react-native';
// import {Button, FormInput, FormLabel} from 'react-native-elements';
import {Button, Text, Input, Image} from 'react-native-elements';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTag, faLink, faPlus} from '@fortawesome/free-solid-svg-icons';

import colors from '../utils/colors.js';
import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState, onAdd} from '../redux';

export const AddLink = () => {
  const [Title, setTitle] = useState('');
  const [URL, setURL] = useState('');

  const dispatch = useDispatch();
  const {added, error, loadingState} = useSelector(
    (state: ApplicationState) => state.linkReducer,
  );
  const titleInputs = useRef();
  const urlInputs = useRef();

  useEffect(() => {
    if (added) {
      titleInputs.current.clear(); // clear value from inputs
      urlInputs.current.clear(); // clear value from inputs
      dispatch({type: 'LINKS_READY'}); // rest added value to false
    }
  });
  const onTapToAdd = () => {
    if (Title != '' && URL != '') {
      dispatch({type: 'LINKS_ATTEMPT'});
      dispatch(onAdd(Title, URL));
    }
  };

  return (
    <View
      style={{
        padding: 10,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

      <Input
        label="Name"
        placeholder="Enter name for linke"
        onChangeText={setTitle}
        autoFocus
        ref={titleInputs}
        leftIcon={
          <FontAwesomeIcon icon={faTag} size={20} color={colors.silver} />
        }
      />

      <Input
        label="Link"
        placeholder="https://google.com"
        onChangeText={setURL}
        ref={urlInputs}
        leftIcon={
          <FontAwesomeIcon icon={faLink} size={20} color={colors.silver} />
        }
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
        title="Add"
        type="solid"
        onPress={onTapToAdd}
        loading={loadingState}
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
