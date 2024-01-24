import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Title from './src/components/menu/Title'
import Main from './src/components/menu/Main'
//import Form from './src/components/menu/Form/'
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    padding: "top",
  },
});
