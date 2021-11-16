import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import { Text } from '../../components/';

const {width, height} = Dimensions.get('window');
export const HEIGHT = height * 0.61;

interface SlideProps{
    label: string;
    right?: boolean;
}

const Slide = ({label, right}:SlideProps) => {
    const transform = [
        {translateY: (HEIGHT - 100) / 2},
        {translateX: right ? (width / 2) - 50 : (-width / 2) + 50},
        {rotate: right ? '-90deg' : '90deg'}
    ]
    return(
        <View style={styles.container}>
            <View style={{transform}}>
                <Text variant="title" >{label}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width,
    },

})

export default Slide;