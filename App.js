import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Title from './src/components/Title/'
import Main from './src/components/Main/'
import Form from './src/components/Form/'
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
