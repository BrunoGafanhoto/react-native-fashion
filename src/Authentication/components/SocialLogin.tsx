import React, { ReactNode } from 'react'

import { theme, Box } from '../../components'
import {EvilIcons, AntDesign} from '@expo/vector-icons';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { backgroundColor } from '@shopify/restyle';

interface SocialIconProps{
    children: ReactNode;
}

const SocialLogin = () => {

    const SocialIcon = ({children} : SocialIconProps) => {
        return(
            <TouchableOpacity
                activeOpacity={0.65}
                style={{
                    width:50,
                    height:50,
                    borderRadius: 25,
                    backgroundColor:"#fff",
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 10
                }}
            >
                {children}
            </TouchableOpacity>
        )
    }

    return(
        <Box
            flexDirection="row"
            justifyContent="center"
        >
            <SocialIcon>
                <EvilIcons name="sc-facebook" size={30} />
            </SocialIcon>
            <SocialIcon>
                <AntDesign name="google" size={25} />
            </SocialIcon>
            <SocialIcon>
                <AntDesign name="apple1" size={25} />
            </SocialIcon>

        </Box>
        
    )
}

export default SocialLogin