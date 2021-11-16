import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme, Text, Box } from '../../../components';
interface CheckboxProps{
    label: string;
}

const Checkbox = ({label} : CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    return(
        <TouchableOpacity onPress={() => setChecked(!checked)} activeOpacity={0.5}>
            <Box flexDirection="row" alignItems="center">
                {checked ?<Ionicons name="checkbox" size={25} color={theme.colors.primary}  /> : <Ionicons name="checkbox-outline" size={25} color={theme.colors.darkGray}  />}
                <Text variant="text" fontSize={16} marginLeft="p">{label}</Text>
            </Box>
           
        </TouchableOpacity >
    )
}
export default Checkbox