import { View, Text, ScrollView } from 'react-native'
import React, { Children, ReactNode } from 'react'
import { GlobalStyles } from '../style/GlogalStyle';

interface Props {
    title?: string,
    back?: boolean,
    right?: ReactNode,
    children: ReactNode,
}

const Container = (props: Props) => {

    const { title, back, right, children } = props;

    return (
        <ScrollView style={[GlobalStyles.container]}>
            {children}
        </ScrollView>
    )
}

export default Container