import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const variable = "This is a string variable."

  return (
   <View>
    <Text style={styles.textStyle}>Getting started with React Native!</Text>
    <Text>We can print variables like this: {variable}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  }
});

export default ComponentsScreen;