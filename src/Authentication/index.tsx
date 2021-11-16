import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Routes } from '../components/Navigation'
import  Onboarding from './Onboarding'
import  Welcome  from './Welcome';
import  Login from './Login'
export {default as Onboarding} from './Onboarding'
export {default as Welcome} from './Welcome'
export {default as Login} from './Login'

const Stack = createStackNavigator<Routes>()

export const StackAuthentication = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>

  )
}