import React from 'react'

import {Container, Box, Text} from '../../components'
import Button from '../../components/Button';
import SocialLogin from '../components/SocialLogin';
import { Routes, StackNavigationProps } from '../../components/Navigation'
import TextInput from '../components/Form/TextInput';
import Checkbox from '../components/Form/CheckBox';
import { StatusBar } from 'react-native';
const emailValidator = (email:string) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
const passwordValidator = (password: string) => password.length >= 6;

const Login = ({navigation}: StackNavigationProps<Routes, 'Login'>) => {
    
    const footer = (
        <Box alignItems="center" flex={1} justifyContent="center">
            <SocialLogin />
            <Button variant="Transparent" onPress={()=> alert('Funfou rs :O')}>
                <Box flexDirection="row">
                    <Text  color="white" marginRight="p">Don't have an account?</Text>
                    <Text color="primary">Sign Up Here</Text>
                </Box>
               
            </Button>
        </Box>
    )

    return(
        <Container {...{footer}} >
            <Box padding="m">
                <Text variant="subtitle" marginBottom="s">Welcome Back</Text>
                <Text variant="descriptionLight" marginBottom="m">
                    Use your credentials below and login to your account
                </Text>
                <Box marginBottom="s">
                    <TextInput 
                        icon="mail"
                        placeholder="Enter your email"
                        validator={emailValidator}
                    />
                </Box>
                
                <TextInput 
                    icon="lock"
                    placeholder="Enter your password"
                    validator={passwordValidator}
                    secureTextEntry={true}
                />

                <Box flexDirection="row" justifyContent="space-between" alignItems="center" paddingHorizontal="s">
                    <Checkbox label="Remember"  />
                    <Button variant="Transparent" onPress={() => true} >
                        <Text color="primary">Forgot password</Text>
                    </Button>
                </Box>

                <Box alignItems="center" margin="m">
                    <Button variant="Primary" value="Log into your account" />    
                </Box>                  
              
            </Box>
        </Container>
    )
}

export default Login;