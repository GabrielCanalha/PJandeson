//Criação do Cabeçalho 
import react from "react";
import {
StyleSheet,
View,
Text,
TouchableOpacity,
StatusBar } from 'react-native';

import {Feather} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
    return(
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.username}>LANCHONETE CANTINA</Text>

                <TouchableOpacity activeOpacity={0.9} style={style.buttonUser}>
                    <Ionicons name="restaurant" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff', 
        paddingTop: StatusBarHeight,
        flexDirection:'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    username:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    },
    buttonUser:{
        width: 44,
        height: 44,
    }

})
