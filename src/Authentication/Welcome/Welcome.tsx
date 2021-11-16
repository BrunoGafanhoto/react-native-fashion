import React from 'react'
import { StyleSheet, Image, Dimensions, StatusBar} from 'react-native'
import {Box, Text} from '../../components'
import Button from '../../components/Button';
import { Routes, StackNavigationProps } from '../../components/Navigation';

const {width} = Dimensions.get('window');

const Welcome = ({navigation}: StackNavigationProps<Routes, 'Welcome'>) => {
    return(
        <Box flex={1}>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

            <Box backgroundColor="gray" flex={1} borderBottomRightRadius="xl" justifyContent="center">
                <Image source={require('../../assets/img/model2.png')} style={{alignSelf: 'center',width:200, height: 200}}  /> 
            </Box>
            <Box flex={1}>
                <Box backgroundColor="gray" flex={1} style={{...StyleSheet.absoluteFillObject}}/>
                <Box backgroundColor="white" flex={1}  borderTopLeftRadius="xl" justifyContent="center" alignItems="center">
                    <Text variant="title2" marginBottom="s">Let's get started</Text>
                    <Text variant="description" marginBottom="m">Login to your account bellow or signup for an
                        amazing experience
                    </Text>
                    <Box marginBottom="m">
                        <Button variant="Primary" value="Have an account? Login" onPress={() => navigation.navigate('Login')}></Button>
                    </Box>
                    <Box marginBottom="m">
                        <Button variant="Default" value="Join us, it's Free"></Button>
                    </Box>
                    <Box marginBottom="m">
                        <Button variant="Transparent" value="Forgot password?"></Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Welcome