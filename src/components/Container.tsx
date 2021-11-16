import React, { ReactNode } from 'react'
import { Dimensions, Image, StatusBar, StyleSheet } from 'react-native'
import theme, {Box, Text} from './Theme'
interface ContainerProps{
    children: ReactNode;
    footer: ReactNode;
}

const {width, height} = Dimensions.get('window')
const aspectRatio = 3091 / 4636;
const heightImage = width * aspectRatio; 

const Container = ({children, footer} : ContainerProps) => {
    return(
        <Box flex={1} backgroundColor="blueDark">
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <Box backgroundColor="white">
                <Box height={height * 0.20} borderBottomLeftRadius="xl" overflow="hidden" >
                    <Image source={require('../assets/img/background.jpg')} style={{ width: width, height: heightImage}} /> 
                </Box>
            </Box>

            <Box height={height * 0.60} overflow="hidden">
                    <Image source={require('../assets/img/background.jpg')} style={{ ...StyleSheet.absoluteFillObject, height: heightImage, width: width, borderBottomLeftRadius: theme.borderRadii.xl, top: -height * 0.20}} /> 
                    <Box flex={1} backgroundColor="white" borderRadius="xl" borderTopLeftRadius={0} justifyContent="center">
                        {children}
                    </Box>
            </Box>
            <Box flex={1} backgroundColor="blueDark">
                {footer}
            </Box>
        </Box>
    )
}

export default Container