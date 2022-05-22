import React from 'react';
import { 
    View,
    Text
} from 'react-native';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../redux/types';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch(); 

  GoogleSignin.configure({
    webClientId: "10381853266-uimturbvhmslqkvr2dinpvg0irkq938q.apps.googleusercontent.com",
    androidClientId: "10381853266-418d05l8lu5v2ndd8e2d8mfnd0lv2d75.apps.googleusercontent.com"
  });

  const signIn = () => {
    navigation.push("Home");
    dispatch({
      type: LOGIN
    })
  };

    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <GoogleSigninButton onPress={() => signIn()} />
      </View>
    );
};

export default LoginScreen;