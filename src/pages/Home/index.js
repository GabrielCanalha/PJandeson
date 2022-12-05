//Criação da pagina Home

import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name= "LANCHONETE CANTINA"/>

      <Balance entrada='9.250,90' saida='-527,00'/>

     <Text style={styles.title}>Últimas Movimentações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#DCDCDC',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  
  }
});

