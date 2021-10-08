import { assertYieldExpression } from '@babel/types';
import React, {Component, useState} from 'react';
import { View, Image, Modal, StyleSheet, Text, TouchableOpacity, Button}from 'react-native';
import Icone from 'react-native-vector-icons/AntDesign';
import Icones from 'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/FontAwesome5';
import Cabecalho from '../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';


export default function TipoDocumento({ navigation }) {

 

  
    return(
 
    <View style={style.container}> 

          <View >  
            <Cabecalho />
          </View>

            <View style={style.body}> 
              <Text style={style.textoBody} > Escolha um documento para envio: </Text> 
                
              <TouchableOpacity style={style.botaoRG} 
              onPress={() => navigation.navigate("fotoRGFrente")}>
                <Text style={style.btnTexto}> R.G. </Text>
                <Icone name='camera' size={30} color='#011e50' style={{position:'absolute', right: 15}}/>
                <Ico name='id-badge' size={35} color='#011e50' style={{position:'absolute',left: 10}}/>
              </TouchableOpacity>

              <TouchableOpacity style={style.botaoCNH} 
              onPress={() => navigation.navigate("fotoRGVerso")} >
                <Text style={style.btnTexto}> C.N.H. </Text>
                <Icone name='camera' size={30} color='#011e50' style={{position:'absolute', right: 15}}/>
                <Ico name='address-card' size={30} color='#011e50' style={{position:'absolute',left: 10}}/>
              </TouchableOpacity>

              <TouchableOpacity style={style.botaoCNH}
              onPress={() => {}}> 
                <Text style={style.btnTexto}> R.N.E </Text>
                <Icone name='camera' size={30} color='#011e50' style={{position:'absolute', right: 15}}/>
                <Icones name='id-card-o' size={30} color='#011e50' style={{position:'absolute',left: 10}}/>
              </TouchableOpacity>

      

            </View>
            

            <View style={style.rodape} > 
            

              <TouchableOpacity onPress={()=> navigation.navigate.goBack()} >
                <Text style={{color:'#011e50', textDecorationLine:'underline', fontSize:20}}> Voltar </Text>
              </TouchableOpacity>
              
            </View>

            

      </View>
    );
  }

const style = StyleSheet.create({

  container:{
    backgroundColor: '#001E50',
    flex:1
  },
  body:{
    backgroundColor: '#fff',
    flex:5,
    alignItems: 'center'
  },
  rodape:{
    backgroundColor: '#fff',
    flex:1,
    alignItems: 'center'
  },
  textoBody:{
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16.5,
    fontFamily:'Helvetica Neue'
  },
  btnTexto:{
    color: '#011e50',
    fontFamily: 'Arial',
    fontSize: 26,
    left: 50,

  },
  botaoCNH:{
    backgroundColor: '#fff',
    width: 316 ,
    height: 73,
    borderRadius: 10,
    justifyContent: 'center', 
    marginTop: 30,
    elevation: 10
  },
  botaoRG:{
    backgroundColor: '#fff', 
    width: 316 , 
    height: 73, 
    borderRadius: 10, 
    justifyContent: 'center', 
    marginTop: 60,
    elevation: 10
  },
  btnContinuar:{
    backgroundColor:'#4fa2da',
    borderRadius: 14,
    elevation: 2, 
    width: 180, 
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal:{
    backgroundColor: '#00ff00',
    padding: 100,
    borderRadius:25
  },
  circuloText:{
    position:'absolute', 
    left:10
  }
  
  
});
