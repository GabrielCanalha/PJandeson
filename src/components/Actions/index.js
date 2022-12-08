import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView    
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
//APENAS PARA O PRIMEIRO BOTÃO --PRODUTOS
import { AntDesign } from '@expo/vector-icons'
//OUTROS ICONS PARA USAR -- ISV, REST, TABLE

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <MaterialCommunityIcons name="table-large-plus" size={26} color="#000" />
      </View>
      <Text style={styles.labelButton}>Produtos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name="shoppingcart" size={26} color="#000"/>
      </View>
      <Text style={styles.labelButton}>Vendas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name="qrcode" size={26} color="#000"/>
      </View>
      <Text style={styles.labelButton}>Pix</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name="setting" size={26} color="#000"/>
      </View>
      <Text style={styles.labelButton}>Usuário</Text>
    </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    maxHeight: 84,
    marginBottom:14,
    marginTop:18,
    paddingEnd: 14,
    paddingStart: 14
  },
  actionButton:{
    alignItems: 'center',
    marginRight:32
  },
  areaButton:{
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelButton:{
    marginTop: 4,
    textAlign:'center',
    fontWeight:'bold'
  },
})