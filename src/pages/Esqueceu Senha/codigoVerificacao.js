import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput,  TouchableOpacity } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';




export default function codigoVerificacao({ navigation }) {

        return(
            <View style={style.container}>
                <View>
                    <Cabecalho />
                </View>

            <View style={style.body}>

                <View style={{alignItems:'center', width:'100%', marginTop:'5%'}}>
                    <Text style={{marginTop:10, color:'#011e50', fontSize:16, fontWeight:'bold'}}> Digite o código de verificação</Text>
                    <Text style={{ color:'#011e50', fontSize:16, fontWeight:'bold'}}>enviado via S.M.S </Text>
                </View>

                <TextInput  placeholder='Código verificação'  style={style.input}/>

                <View style={{width:'100%', marginTop:'70%', justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={style.btn} onPress={()=> navigation.navigate("novaSenha")} >
                        <Text style={{color:'#fff', fontWeight:'bold',fontSize:18}}> Confirmar </Text>
                    </TouchableOpacity>
                </View>
                

            </View>
        </View>
        );
    }


const style = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex:1
      },
      body:{
        backgroundColor: '#fff',
        flex:4,
        alignItems: 'center'
      },
      input:{
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        width: '90%',
        marginTop: '15%',
        fontSize:18

      },
      btn:{
        backgroundColor:'#4FA2DA',
        justifyContent:'center',
        alignItems:'center',
        width: 150,
        height: 40,
        borderRadius:10
    }, 
})
