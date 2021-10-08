import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput,  TouchableOpacity } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';




export default function confirmarDados({ navigation }) {


        return(
            <View style={style.container}>
                <View>
                    <Cabecalho />
                </View>

            <View style={style.body}>

                <View style={{alignItems:'center', width:'100%', marginTop:'5%'}}>
                    <Text style={{marginTop:10, color:'#011e50', fontSize:16, fontWeight:'bold'}}> Confirme os dados abaixo para</Text>
                    <Text style={{marginTop:2, color:'#011e50', fontSize:16, fontWeight:'bold'}}>Redefinir sua Senha</Text>
                </View>
                <View style={style.input}>
                    <TextInput  placeholder='CPF'  style={style.botao} />
                    <TextInput  placeholder='Número de Telefone'  style={style.botao} />
                    <TextInput  placeholder='Nome da mãe'  style={style.botao} />
                </View>

                <View style={{width:'100%', marginTop:'50%', justifyContent:'center', alignItems:'center'}}>

                    <TouchableOpacity style={style.btn}  onPress={()=> navigation.navigate("codigoVerificacao")} >
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
        width: '90%',
        marginTop: '15%'

      },
      btn:{
        backgroundColor:'#4FA2DA',
        justifyContent:'center',
        alignItems:'center',
        width: 150,
        height: 40,
        borderRadius:10
    }, 
    botao:{
        borderBottomColor:'#707070', 
        borderBottomWidth:1
    }
})
