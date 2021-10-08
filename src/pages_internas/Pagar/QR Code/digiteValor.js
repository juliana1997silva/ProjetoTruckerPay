import React, {useState} from 'react';
import { Component } from 'react';
import { View, StyleSheet,Text, Image}from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Icones from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { placeholder } from '@babel/types';
import Icon from'react-native-vector-icons/MaterialIcons';

export default function digiteValor({ navigation }){


   



    return(
        <View style={style.container}>
            
            <View style={{flexDirection:'column', backgroundColor:'#fff', elevation:2, borderBottomColor:'#fff', borderBottomWidth:1, elevation:30, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{marginTop:15}}>
                        <Icon name='keyboard-arrow-left' size={30} color='#011e50' />
                    </TouchableOpacity>
                    <Image source={require('../../../imagens/logo.png')} style={style.img}/>
                    <Icone name='user-circle' size={30} color='#011e50' style={{marginLeft:50, marginTop:15}} />
                </View>
                <View style={{borderTopColor:'#d3d3d3', borderTopWidth:1, width:'90%', marginLeft:20, marginTop:20}}/>
                <View style={{ width:'100%', height:60, alignItems:'center', shadowOffset:{width:0, height:1}, shadowColor:'#d3d3d3', flexDirection:'row'}}>
                    <Text style={{color:'#011e50', fontSize:16, fontWeight:'bold', marginLeft:20}}> Saldo Disponível { '  '} R$ { '  '} [valor] </Text>
                    <TouchableOpacity> 
                        <Icones name='eye' size={20} color='#011e50' style={{marginLeft:65}} />
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style={style.body}> 

                <View style={{marginTop:'10%'}}>
                    <Text style={{color:'#011e50', fontWeight:'bold', textAlign:'center', fontSize:20}}> Digite o valor abaixo </Text>
                    <View style={{elevation:15,width:280, height:90, marginTop:'10%',borderRadius:15, backgroundColor:'#fff'}}>
                    <TextInput placeholder='Valor' keyboardType='numeric' style={{borderWidth:1, borderColor:'#d3d3d3', width:280, 
                    height:90,  borderRadius:15, fontSize:23, color:'#011e50'}}> R$ {'  '}</TextInput></View>
                </View>

                

                <View style={{backgroundColor:'#4FA2DA', width:150, height:40, justifyContent:'center', borderRadius:15, marginTop:'70%', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate("comprovanteQrCode")} >
                        <Text style={{fontSize:18, color:'#fff', fontWeight:'bold'}}> CONTINUAR </Text>
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
      alignItems:'center'
    },
    img:{
        width: 150,
        height: 50,
        marginLeft: '20%'
      },
      circulo:{
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: '#fff',
        marginLeft:5,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#d3d3d3',
        borderWidth:1,
        elevation:5
    },
    input:{
        width:60,
        height:30,
        backgroundColor:'#fff',
        borderRadius:5,
        borderColor:'#d3d3d3',
        borderWidth:1,
        elevation:2,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    }

  
});