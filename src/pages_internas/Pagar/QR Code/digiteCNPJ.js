import React, {useState} from 'react';
import { View, StyleSheet,Text, Image}from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Icon from'react-native-vector-icons/MaterialIcons';

export default function digiteCNPJ({ navigation }){


    



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
                <View style={{ width:'100%', height:60, alignItems:'center', shadowOffset:{width:0, height:1}, shadowColor:'#d3d3d3', flexDirection:'row', justifyContent:'center'}}>
                    <Text style={{color:'#011e50', fontSize:18, fontWeight:'bold'}}> Digite o seu CNPJ </Text>
                   
                </View>
                
            </View>

            <View style={style.body}> 

                <View>
                    <TextInput placeholder='00.000.000/0000-00' style={style.input}></TextInput>
                    <Text style={{marginLeft:'5%', color:'#d3d3d3'}}>Apenas os números</Text>
                </View>

                <View style={{backgroundColor:'#4FA2DA', width:150, height:40, justifyContent:'center', borderRadius:15, marginTop:'60%', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate("digiteValor")}>
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
    input:{
        width:290,
        height:120,
        backgroundColor:'#fff',
        borderRadius:20,
        borderColor:'#d3d3d3',
        borderWidth:1,
        elevation:8,
        justifyContent:'center',
        alignItems:'center',
        margin:15,
        fontSize:23,
        textAlign:'center',
        marginTop:70
    }

  
});