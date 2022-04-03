/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'column',
          height: 400,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Animation')}>
          <Text
            style={{
              borderRadius: 10,
              marginHorizontal: 20,
              paddingVertical: 10,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: '#555',
            }}>
            Animation
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Calculator')}>
          <Text
            style={{
              borderRadius: 10,
              marginHorizontal: 20,
              paddingVertical: 10,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: '#555',
            }}>
            Calculator
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Games')}>
          <Text
            style={{
              borderRadius: 10,
              marginHorizontal: 20,
              paddingVertical: 10,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: '#555',
            }}>
            Games
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
