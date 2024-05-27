import React from 'react';
import { StyleSheet, View } from 'react-native';
import GoogleSignin from '../Components/GoogleSignin';

const AuthScreen = () => {
  return (
    <View>
      <GoogleSignin />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
