import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { GlobalStyles } from '../style/GlogalStyle'

interface Props {
    children: ReactNode,
    BGr?: string,
    styles?: StyleProp<ViewStyle>
}

const CardComponents = (props: Props) => {
  
    const {children, BGr, styles} = props

    return (
    <View style={[GlobalStyles.inputContainer, {padding: 12}, styles]}>
      {children}
    </View>
  )
}

export default CardComponents