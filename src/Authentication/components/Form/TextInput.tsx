import React, { useState } from "react";
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons'
import {Box, theme} from '../../../components'

interface TextInputProps extends RNTextInputProps{
    icon: string;
    validator: (input:string) => boolean;
}
const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;



const TextInput = ({icon, validator, ...props} : TextInputProps) => {
    const [input, setInput] = useState('');
    const [state, setState] = useState<InputState>(Pristine)
    const reColor = state === Pristine ? "darkGray" : (state === Valid ? 'primary' : 'danger')
    const color = theme.colors[reColor];
    const onChangeText = (text: string) => {
        setInput(text);
        if(state !== Pristine){
            validate();
        }
    };

    

    const validate = () => {
        const valid = validator(input);
        setState(valid);

    }
    return(
        <Box
            
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            marginHorizontal="s"
            paddingHorizontal="s"
            height={48}
            borderRadius="s"
            borderWidth={StyleSheet.hairlineWidth}
            borderColor={reColor}
            
        >

             <Box paddingRight="s">
                <Feather name={icon} size={16} {...{ color } }/>
             </Box>
            <RNTextInput
                style={{flex:1}}
                underlineColorAndroid="transparent"
                placeholderTextColor={color}
                onBlur={validate}
                {...{onChangeText}}
                {...props}
          
            />
            {
                (state === Valid || state === Invalid) && (
                    <Box borderRadius="m" height={SIZE}  width={SIZE} alignItems="center" justifyContent="center" backgroundColor={state === Valid ? 'primary' : 'danger'}>
                        <Feather name={state === Valid ? 'check' : 'x'} color="#fff" />
                    </Box>
                )
            }
            
        </Box>
     
    )
}

export default TextInput;