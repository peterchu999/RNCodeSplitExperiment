import React from 'react';
import {View} from 'react-native';

export const Row = ({children}: any) => (
  <View style={{flexDirection: 'row'}}>{children}</View>
);
