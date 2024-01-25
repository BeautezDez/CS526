import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../style/GlogalStyle'
import { fontFamilies } from '../constants/fontFamilies'
import { colors } from '../constants/color'

interface Props {
    text: string,
    size?: number,
    font?: string,
    color?: string,
    flex?: number,
}

const TextComponent = (props: Props) => {

    const { text, size, font, color, flex } = props

    return (
        <Text 
            style={[GlobalStyles.text, 
            {
                flex: flex ?? 1, 
                fontFamily: font ?? fontFamilies.light, 
                fontSize: size ?? 14, 
                color: color ?? colors.Desc,
        }]}>{text}</Text>
    )
}



export default TextComponent