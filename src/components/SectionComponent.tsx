import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { GlobalStyles } from '../style/GlogalStyle';

interface Props {
    children: ReactNode,
}

const SectionComponent = (props: Props) => {

    const {children} = props;

  return (
    <View style={[GlobalStyles.section]}>{children}</View>
  )
}

export default SectionComponent