import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, StatusBar, ScrollView, RefreshControl} from 'react-native';
import {ListItem} from 'react-native-elements';

import colors from '../utils/colors.js';
import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState, onLoadLinkData} from '../redux';

export const Home = () => {
  const dispatch = useDispatch();
  const {
    error,
    loadingState,
    dataLoading,
    data,
    dataDone,
    refresh,
  } = useSelector((state: ApplicationState) => state.linkReducer);

  const DATAB = data;
  // DATAB = data;

  const onTapList = (name: String) => {
    console.log(name);
  };

  const onTapLoad = () => {
    dispatch({type: 'LINKS_LOAD_ATTEMPT'});
    dispatch(onLoadLinkData());
  };

  const onRefresh = () => {
    dispatch({type: 'LINKS_LOAD_REFRESH'});
    dispatch(onLoadLinkData());
  };

  useEffect(() => {
    if (!dataDone) {
      dispatch(onLoadLinkData());
      // console.log(DATAB);
    }
  });

  return (
    <View
      style={{
        flex: 1,
        padding: 15,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.red} />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        {DATAB.map((l, i) => (
          <ListItem
            key={i}
            bottomDivider
            onPress={() => {
              onTapList(l.URL);
            }}
            containerStyle={{
              backgroundColor: colors.orangH,
              marginBottom: 5,
              borderRadius: 5,
            }}>
            <ListItem.Content>
              <ListItem.Title style={{color: colors.whith}}>
                {l.Title}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};
