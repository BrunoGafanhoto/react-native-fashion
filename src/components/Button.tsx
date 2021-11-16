import React, { ReactNode } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { Text, StyleSheet } from 'react-native'
import { theme } from '.';

interface ButtonProps{
    variant: "Primary" | "Default" | "Transparent",
    value:string;
    onPress: () => void;
    children?: ReactNode;
}

const Button = ({variant, value, onPress, children} : ButtonProps) => {
    const backgroundColor = variant === 'Primary' ? theme.colors.primary : (variant === 'Transparent' ? 'transparent': '#ccc4');
    const color = variant === 'Primary' ? "#fff" : '#000';
    return(
        <RectButton style={[styles.container, {backgroundColor, width: children ? 'auto' : 245}]} 
            onPress={onPress} 
        >
            {children ? children :
                (<Text style={{color}}>{value}</Text>) 
            }
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

Button.defaultProps = {variant:'Default'};

export default Button;