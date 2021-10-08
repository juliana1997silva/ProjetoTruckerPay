import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput }from 'react-native';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Icon from'react-native-vector-icons/MaterialIcons';


export default function CodigoBarra({ navigation }){

        return(
            <View style={style.container}>

                <View style={{flexDirection:'column', backgroundColor:'#fff', elevation:2, borderBottomColor:'#fff', borderBottomWidth:1, elevation:30, 
                borderBottomLeftRadius:10, borderBottomRightRadius:10, height:60}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity style={{marginTop:15}}>
                            <Icon name='keyboard-arrow-left' size={30} color='#011e50' />
                        </TouchableOpacity>
                        <Image source={require('../../../imagens/logo.png')} style={style.img}/>
                        <Icone name='user-circle' size={30} color='#011e50' style={{marginRight:10 ,marginTop:15}} />
                       
                    </View>
                    
                
                </View>

               <View style={style.body}>

                    <View style={{marginTop:'20%'}}>
                        <Text style={{color:'#011e50', fontSize:18, fontWeight:'bold', textAlign:'center'}}> Digite o código de barras</Text>
                        <TextInput placeholder='Código de Barra' keyboardType='numeric' multiline={true} style={style.input} > </TextInput>
                        <Text style={{color:'#707070', fontSize:14, marginTop:'3%'}}> Apenas os numeros </Text>
                    </View>

                    <TouchableOpacity style={style.btn} onPress={()=> navigation.navigate("comprovante")}  >
                        <Text style={{color:'#fff', fontWeight:'bold', fontSize:16}}> CONTINUAR </Text>
                    </TouchableOpacity>

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
        height: 50
      }, 
      input:{
          width: 290,
          height: 100,
          borderWidth:1,
          borderColor:'#d3d3d3',
          borderRadius:15,
          backgroundColor:'#fff',
          elevation:4,
          marginTop:'5%'

      },
      btn:{
          width:143,
          height:37,
          backgroundColor:'#4fa2da',
          borderRadius:30,
          justifyContent:'center',
          alignItems:'center',
          marginTop:'75%'
      }
  
});