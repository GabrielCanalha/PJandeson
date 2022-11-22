//Criação da pagina Home

import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Header';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>LANCHONETE CANTINA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

