import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
 } from 'react-native';

export default function Balance({ entrada, saida }) {
 return (
   <View style={styles.container}>

    <View style={styles.item}>
        <Text style={styles.itemTitle}>Entrada</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.Balance}> {entrada} </Text>
            </View>
    </View>

    <View style={styles.item}>
        <Text style={styles.itemTitle}>Saida</Text>
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>R$</Text>
                <Text style={styles.Expenses}>{ saida }</Text>
            </View>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',

        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 8,
        paddingTop: 20,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle:{
        fontSize: 20,
        color: '#A9A9A9'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        color: '#A9A9A9',
        marginRight: 6,
    },
    Balance:{
        fontSize: 21,
        color: '#2ecc71'
    },
    Expenses:{
        fontSize: 21,
        color:'#e74c3c'
    }
})