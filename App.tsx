import 'react-native-gesture-handler';
// App.tsx
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.',
]);
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import {Login, Onboarding, StackAuthentication, Welcome} from './src/Authentication';
import { Routes } from './src/components/Navigation';

import {ThemeProvider} from '@shopify/restyle';
import { theme } from './src/components';
import { useFonts } from 'expo-font';



export default function App(){
  const [loaded] = useFonts({
    CormorantBold: require('./assets/fonts/Cormorant-Bold.ttf'),
    CormorantSemiBold: require('./assets/fonts/Cormorant-SemiBold.ttf'),
    CormorantMedium: require('./assets/fonts/Cormorant-Medium.ttf'),
    
  });
  
  if (!loaded) {
    return null;
  }

  return(
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StackAuthentication />
      </NavigationContainer>
    </ThemeProvider>
    
  )
}