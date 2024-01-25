import { View, Text, Touchable } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { GlobalStyles } from '../style/GlogalStyle'
import RowComponents from '../components/RowComponents'
import SectionComponent from '../components/SectionComponent'
import TextComponent from '../components/TextComponent'
import TitleComponent from '../components/TitleComponent'
import { TouchableOpacity } from 'react-native'
import CardComponents from '../components/CardComponents'

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponents justify='space-between'>

          <TextComponent text='dddd'/>
        </RowComponents>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text='Hi Concac' />
        <TitleComponent text='Ngay moi nhu con cac' />
      </SectionComponent>

      <SectionComponent>
        <RowComponents styles={[GlobalStyles.inputContainer]} 
          onPress={()=> console.log('concac')}>
          <TextComponent text='Sreach'/>
          <Text>S</Text>
        </RowComponents>
      </SectionComponent>

      <SectionComponent>
        <CardComponents>
          <RowComponents>
            <View style={{ flex: 1 }}>
              <TitleComponent text='Task Progress' />
              <TextComponent text='30/50 da xong' />
              <TextComponent text='Tag' />
            </View>
            <View>
              <TextComponent text='CircleChar' />
            </View>

          </RowComponents>
        </CardComponents>
      </SectionComponent>
    </Container>
  )
}

export default HomeScreen