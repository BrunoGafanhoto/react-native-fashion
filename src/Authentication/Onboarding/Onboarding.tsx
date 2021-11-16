import React, { useRef } from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Animated, { divide, Extrapolate, interpolateNode, multiply, useValue } from 'react-native-reanimated';
import {onScrollEvent, interpolateColor } from 'react-native-redash/lib/module/v1'
import { Routes, StackNavigationProps } from '../../components/Navigation';
import Dot from './Dot';
import Slide, { HEIGHT } from './Slide';
import Subslide from './Subslide';


const {width, height} = Dimensions.get('window');

const slides = [
    {label: 'Onboarding', color: '#B2DECD', subtitle: 'Find Your Outfits', description: "Confused about your outfit? Don't worry! Find the best outfit here!", src:null},
    {label: 'Fashion', color: '#F1C6A4', subtitle: 'Hear it First, Wear it First', description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas', src: null},
    {label: 'Summer', color: '#CFC47D', subtitle: 'Your Style, Your Way', description: 'Create your individual & unique style and look amazing everyday', src: null},
    {label: 'Winter', color: '#1b100c', subtitle: 'Look Good, Fael Good', description: 'Discover the latest trends in fashion and explore your personality', src: require('../../assets/img/model.jpg')}
]

const Onboarding = ({navigation}: StackNavigationProps<Routes, 'Onboarding'>) => {
    const scroll = useRef<Animated.ScrollView>(null)
    const x = useValue(0);
    const onScroll = onScrollEvent({ x })
    const backgroundColor = interpolateColor(x,{
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })
    
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.slide, {backgroundColor}]}>
                    {slides.map(({src}, index) => { 
                        const opacity = interpolateNode(x, {
                            inputRange: [(index - 1) * width, index * width, (index + 1) * width],
                            outputRange: [0, 1 ,0],
                            extrapolate: Extrapolate.CLAMP
                        });
                        return(
                         <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}} key={index}>
                            <Image key={index} source={src} style={{...StyleSheet.absoluteFillObject, transform: [{scale:0.7}], width: 400, height:'auto', borderBottomRightRadius: 75, borderTopLeftRadius: 75, left: -25}} />  
                         </Animated.View>
                        
                        )
                    }) }
                   
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    decelerationRate="fast"
                    scrollEventThrottle={1}
                    bounces={false}
                    {...{onScroll}}
                    
                >
                    {slides.map(({label}, index) => (<Slide {...{label}} right={!!(index % 2)} key={index} />)  )}

                </Animated.ScrollView>
            </Animated.View>

            <View style={[styles.footer]}>
                <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor }} />
                
                <View style={[styles.footerContent]}>
                    <View style={{height:80, flexDirection: 'row', alignItems: 'center'}}>
                        {slides.map((_, index) => <Dot key={index} currentIndex={divide(x, width)} {...{index}} />)}
                    </View>
            
              
                    <Animated.View  style={ {...StyleSheet.absoluteFillObject, width: width * slides.length - 1,  transform: [{translateX:multiply(x, -1)}], flexDirection: 'row'} }>

                        {slides.map(({subtitle, description}, index) => {
                            const last = index === slides.length - 1;
                                return(
                                    <Subslide key={index}  {...{subtitle, description, last}} 
                                        onPress={()=>{
                                            if(last){
                                                navigation.navigate('Welcome');
                                            }
                                            else{
                                                scroll.current
                                                ?.getNode()
                                                .scrollTo({ x: width *(index + 1), animated: true})
                                            }
                                        }}
                                    />
                                )
                            }
                        )}

                    </Animated.View>
                    
                    

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#fff',

    },
    slide: {
        backgroundColor: 'red',
        height: HEIGHT,
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1,
        
    },
    footerContent:{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        borderTopLeftRadius: 75,
    }
})
export default Onboarding;