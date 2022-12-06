//Criação da pagina Home

import React from 'react';
import {StyleSheet, View, Text, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

const list = [
  {
    id: 1,
    label: '2 pastéis de Carne',
    value: '32,00',
    date: '05/12/2022',
    type: 1 //ENTRADA 
  },
  {
    id: 2,
    label: '5 Coxinhas de Frango',
    value: '25,00',
    date: '05/12/2022',
    type: 1 //ENTRADA 
  },
  {
    id: 3,
    label: 'Boleto Luz',
    value: '150,00',
    date: '03/12/2022',
    type: 0 //SAIDA 
  },
  {
    id: 4,
    label: '2 Cuscus com ovos',
    value: '50,00',
    date: '04/12/2022',
    type: 1 //ENTRADA 
  },

]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name= "LANCHONETE CANTINA"/>

      <Balance entrada='9.250,90' saida='-527,00'/>

      <Actions/>

      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}//AQUI GABRIEL VC PODE COLOCAR DE ONDE A LISTA IRA PUXAR AS INFORMAÇÕES, AQUI ELE TA VINDO DE LIST
        keyExtractor={( item ) => String(item.id)}
        showsVerticalScrollIndicator={ false }
        renderItem={ ({ item }) => <Movements data={ item } /> }
      />

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
    margin: 14, 
  },
  list:{
    marginStart: 14,
    marginEnd: 14,

  }
});

