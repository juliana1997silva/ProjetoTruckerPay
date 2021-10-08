import React from "react";
import {View, Text, StyleSheet, TextInput, Switch, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Cabecalho from '../componentes/Cabecalho';
import Icone from 'react-native-vector-icons/Ionicons';



export default function Login({navigation}){
    return(
        <View style={style.container}>
            <View>
                <Text style={{color:'#011e50', fontSize:20, textAlign:'center', fontFamily: 'Helvetica Neue', marginTop: '2%', backgroundColor:'#fff'}}> Bem vindo ao  </Text>
                <Cabecalho />
            </View>

            <View style={style.body}>
            <TextInput  placeholder='CPF / CNPJ'  style={style.input}/>
            <TextInput  placeholder='Senha'  style={style.inputSenha}/>

            <View style={{width:'100%'}}>
                <TouchableOpacity onPress={()=> navigation.navigate("confirmarDados")} > 
                    <Text style={{color:'#707070', textAlign:'right', marginTop:'5%', marginRight:'5%'}}> Esqueci minha senha </Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', textAlign:'left',  width: '100%'}}>
                <Switch   
                    onChange= {() => {}}
                    checked={false}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiamenter={15}
                    offColor='#808080'
                    onColor='#001e50'
                    style={{textAlign:'left', marginTop:'7%', marginLeft:'6%'}}
                    
                    />
                <Text style={{color:'#707070', marginTop:'5.5%', }}> Salvar CPF / CNPJ</Text>

            </View>

            <View style={{width:'100%', alignItems:'center', marginTop: '10%'}}>

                <TouchableOpacity style={{backgroundColor:'#1db0f0', width:143, height:37, borderRadius:30, justifyContent:'center'}} onPress={()=> navigation.navigate("Home")}>
                    <Text style={{textAlign:'center', fontSize:22, color:'#fff'}}> Iniciar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width:143, height:37, borderRadius:30, justifyContent:'center'}} onPress={() => navigation.navigate('TipoPessoa')}>
                    <Text style={{textAlign:'center', fontSize:18, color:'#011E50', textDecorationLine:'underline'}}> Cadastre-se </Text>
                </TouchableOpacity>
            </View>

            <View style={{width:'100%', alignItems:'center', marginTop: '7%'}}>
                <Icone name='finger-print' size={40} color='#001e50'  />
                <Text style={{color:'#021F51', opacity: 0.5}}> Entre utilizando a impressão digital </Text>
                
            </View>

            <View style={{flexDirection:'row', alignItems:'center', marginTop:'7%'}}>
                <Image source={require('../imagens/logoVW1.png')}  />
                <Image source={require('../imagens/logoVW.png')}  />
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
        marginTop: '5%'

      },
      inputSenha:{
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
        width: '90%',
        marginTop: '5%'
      }
})
