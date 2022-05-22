import React from 'react';
import { 
  NavigationContainer
} from '@react-navigation/native';
import LoginScreen from '../containers/Login'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../containers/Home';

const RootStack = createStackNavigator();

const AppNavigator = ({navigation}) => (
    <NavigationContainer>
    <RootStack.Navigator>
        <RootStack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen}/>
        <RootStack.Screen options={{ headerShown: false }}name="Home" component={HomeScreen}/>
    </RootStack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;