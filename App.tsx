import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { fontFamilies } from './src/constants/fontFamilies'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ 
        fontFamily: fontFamilies.light, 
        color: '#ccc', 
        fontSize: 16,
      }}> 
      Welcome to my app</Text>
      <Text style={styles.title}>Todo List</Text>
      <Button title='Hello' onPress={() => { }} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: fontFamilies.semibold,
    fontSize: 32,
    color: '#fff',
  },
})