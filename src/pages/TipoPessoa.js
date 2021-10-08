import { assertYieldExpression } from '@babel/types';
import CheckBox from '@react-native-community/checkbox';
import React, {Component} from 'react';
import { View, Image, Modal, StyleSheet, Text, TouchableOpacity}from 'react-native';
import Icone from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ico from 'react-native-vector-icons/Fontisto';
import Cabecalho from '../componentes/Cabecalho';


export default function TipoPessoa({navigation}){



    return(
 
    <View style={style.container}> 

      

              <View >  
                <Cabecalho />
              </View>

              <View style={style.body}>
                <Text style={style.textBody}> Escolha seu perfil:</Text>
                
                <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('CPF')}> 
                  <Text style={style.btnTexto}>
                  <Icone name='user' size={35} color='#001e50'/> {' '} Pessoa Física</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.botaoPJ} onPress={() => navigation.navigate('CNPJ')}> 
                  <Text style={style.btnTexto}>
                  <Icon name='store' size={35} color='#001e50'/> {' '} Pessoa Jurídica</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row', marginTop: '4%', left: '0.2%', justifyContent:'center'}}>

                  <CheckBox />
                  <Text> Li e concordo com os 
                    <TouchableOpacity onPress={()=> navigation.navigate("TermoAbertura")} > 
                      <Text> Termo de Condições </Text> 
                    </TouchableOpacity> 
                  </Text>

                </View>

                
              </View>

              <View style={style.rodape}>
                
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
  rodape:{
    backgroundColor: '#fff',
    flex:1,
    marginLeft:15
  },
  botao:{
    backgroundColor: '#fff',
    width: 316 ,
    height: 73,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 40,
    elevation: 10
  },
  botaoPJ:{
    backgroundColor: '#fff',
    width: 316 ,
    height: 73,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
    elevation: 10
  },
  btnTexto:{
    fontFamily: 'Arial',
    fontSize: 25,
    color: '#011e50',
    marginLeft:15
  },
  textBody:{
    color:'#001e50', 
    fontWeight:'bold',
    fontSize:18, 
    fontFamily:'Helvetica Neue', 
    marginTop:55
  }

});

