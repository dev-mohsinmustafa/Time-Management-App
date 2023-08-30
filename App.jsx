import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigator from './src/navigation/MainNavigator'
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})