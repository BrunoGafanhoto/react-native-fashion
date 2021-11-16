import React from 'react'
import {View,StyleSheet, Dimensions} from 'react-native'
import { Text } from '../../components'
import Button from '../../components/Button'

interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const {width, height} = Dimensions.get('window')

const Subslide = ({subtitle, description, last, onPress} : SubslideProps) => {
    return(
        <View style={styles.container}>
            <Text variant="title2" marginBottom="s">{subtitle}</Text>
            <Text variant="description" marginBottom="l">{description}</Text>
            <Button value={last ? "Let's get started" : 'Next'} variant={last ? 'Primary' : 'Default'} {...{onPress}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 44
    },
    subtitle:{
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40
    }
})

export default Subslide;