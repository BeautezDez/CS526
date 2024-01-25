import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { GlobalStyles } from '../style/GlogalStyle';
import { TouchableOpacity } from 'react-native';

interface Props {
  children: ReactNode,
  justify?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined,

  onPress?: () => void;
  styles?: StyleProp<ViewStyle>
}

const RowComponents = (props: Props) => {
  const { children, justify, onPress , styles } = props;

  const localStyle = [
    GlobalStyles.row, 
    { 
      justifyContent: justify ?? 'center' 
    },
    styles
  ]

  return onPress ? (<TouchableOpacity onPress={onPress ? () => onPress() : undefined} style = {localStyle} >{children}</TouchableOpacity>) : (
    <View style= {localStyle}>{children}</View>
  )
};

export default RowComponents