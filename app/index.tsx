import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RootPage = () => {
  return (
    <View style={styles.Container}>
      <Text>RootPage</Text>
    </View>
  )
}

export default RootPage

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})