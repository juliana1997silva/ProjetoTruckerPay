import { assertYieldExpression } from '@babel/types';
import React, {Component} from 'react';
import { View, Image,  StyleSheet,Text, TextInput,TouchableOpacity}from 'react-native';
import Cabecalho from '../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';



export default function CNPJ({navigation}){

    return(
            <View style={style.container}>

              <View >  
                <Cabecalho />
              </View>

              
              <View style={style.body}>
                <Text style={style.textBody}> Bem-vindo à Trucker Pay!</Text>
                <Text style={style.textBody1}> Para dar continuidade em seu  </Text>
                <Text style={style.textBody1}> cadastro, preencha os dados </Text>
                <Text style={style.textBody1}> a seguir: </Text>
                <Text style={style.textBody2}> Informe seu CNPJ: </Text>
                
                <TextInput  placeholder='00.000.000/0000-00'  style={style.botao}/>
                <Text style={style.textInfo}> Digite apenas os números</Text>

              
              </View>

              <View style={style.rodape}>  
            <TouchableOpacity style={style.btnAvancar} onPress={() => navigation.navigate('NomeCompleto')} >
                  <Text style={{textAlign:'center',color:'#fff',fontSize:16}}>CONTINUAR </Text>
                </TouchableOpacity> 
                
                <TouchableOpacity style={style.btnVoltar} onPress={() => navigation.goBack()} >
                  <Text style={{textAlign:'center',fontSize:17}}>Voltar </Text>
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
    flex:4
  },
  botao:{
    backgroundColor: '#fff',
    width: 320 ,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 30,
    elevation: 10,
    textAlign: 'center',
    fontSize: 26,
    marginLeft:'5%',
    marginRight:'5%',
    marginTop:'6%'
  },
  textBody:{
    color:'#001e50',
    fontSize: 20, 
    fontFamily:'Helvetica Neue',
    textAlign: 'center', 
    marginTop:'5%',
    marginBottom: '8%',
    fontWeight: 'bold'
  },
  textInfo:{
    fontFamily:'Helvetica Neue',
    fontSize:14, 
    color:'#707070',
    marginLeft:'5%', 
    marginTop:'5%'
  },
  textBody1:{
    color:'#001e50',
    fontSize: 20, 
    fontFamily:'Helvetica Neue',
    marginLeft:'5%', 
  },
  textBody2:{
    color:'#001e50',
    fontSize: 20, 
    fontFamily:'Helvetica Neue',
    marginTop:'5%',
    marginLeft:'5%',
    marginBottom: '2%'
  },
  rodape:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:'50%',
    width: '100%'
  },
  btnVoltar:{
    width:130, 
    height:40,
    marginTop: 10
  },
  btnAvancar:{
    width:130, 
    height:40,
    borderStyle:'solid',
    borderRadius:10,
    justifyContent: 'center', 
    alignContent:'center',
    backgroundColor:'#4FA2DA',
    elevation: 5
  }
});


