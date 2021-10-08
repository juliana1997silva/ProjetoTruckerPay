import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput,  TouchableOpacity } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';




export default function novaSenha({ navigation }) {
 
        return(
            <View style={style.container}>
                <View>
                    <Cabecalho />
                </View>

            <View style={style.body}>

                <View style={{alignItems:'center', width:'100%', marginTop:'5%'}}>
                    <Text style={{marginTop:10, color:'#011e50', fontSize:16, fontWeight:'bold'}}> Digite a sua nova senha</Text>
                </View>

                <TextInput  placeholder='Nova senha' secureTextEntry={true} style={style.input}/>
                <TextInput  placeholder='Confirmação da senha' secureTextEntry={true} style={style.input1}/>

               <View>
                    <Text style={style.textBody1}> Mínimo 1 letra maiúscula </Text>
                    <Text style={style.textBody2}> Mínimo 1 letra minúscula </Text>
                    <Text style={style.textBody2}> Mínimo 1 letra número</Text>
                    <Text style={style.textBody2}> Mínimo 1 letra caractere especial (@,#,$,%...)</Text>
                </View>

                <View style={{width:'100%', marginTop:'35%', justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={style.btn} onPress={()=> navigation.navigate("Login")} >
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
    input1:{
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        width: '90%',
        fontSize:18,
        marginTop:'5%'
      },
  textBody2:{ 
    fontSize:16,
    color:'#707070'
  },
  textBody1:{ 
    fontSize:16,
    color:'#707070',
    marginTop:'13%'
  }
})
