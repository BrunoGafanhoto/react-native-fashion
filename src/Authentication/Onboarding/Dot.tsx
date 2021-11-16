import React from "react";
import {View, StyleSheet} from 'react-native'
import Animated, { Extrapolate, interpolateNode } from "react-native-reanimated";
import { theme } from "../../components";
interface DotProps{
    index: number;
    currentIndex: Animated.Node<number>;
}

const Dot = ({index, currentIndex}:DotProps) => {
    
    const scale = interpolateNode(currentIndex, { 
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.6, 1, 0.6],
        extrapolate: Extrapolate.CLAMP
    })
    const opacity = interpolateNode(currentIndex, { 
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: Extrapolate.CLAMP
    })
    return(
        
        
            <Animated.View style={[styles.dot, {opacity, transform: [{scale}]}]} />
  
        
    )
}

const styles = StyleSheet.create({
    dot: {
        margin: 4,
        width: 8, 
        height: 8,
        borderRadius: 4,
        backgroundColor: theme.colors.primary
    }
})

export default Dot;