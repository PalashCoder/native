import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.error('Error signing out: ', error);
  }
};

GoogleSignin.configure({
  webClientId:
    '434717610234-1q2lhe92qnoanoolq09ccl6tj60ef14g.apps.googleusercontent.com',
});

const Signin = () => {
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(JSON.stringify(userInfo.user, null, 2));
    } catch (error) {
      console.log('Error signing in with Google: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{width: 192, height: 48, cursor: 'pointer'}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signInWithGoogle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Signin;
