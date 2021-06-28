import React from 'react';
import {Text, View} from 'react-native';

const Message = ({message}) => {
  if (!message) {
    return null;
  }
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export {Message};
