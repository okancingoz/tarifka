import {Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomBackButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </Pressable>
  );
};

export default CustomBackButton;
