import React from 'react';
import LottieView from 'lottie-react-native';

const Error = () => {
  return (
    <LottieView
      style={{flex: 1}}
      source={require('../../assets/animations/error.json')}
      autoPlay
    />
  );
};

export default Error;
