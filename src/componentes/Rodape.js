import { assertYieldExpression } from '@babel/types';
import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity}from 'react-native';


export default function Rodape({navigation}){


    return(

          <View style={style.rodape}>  
            <TouchableOpacity style={style.btnAvancar}>
                  <Text style={{textAlign:'center',color:'#fff',fontSize:16}}>CONTINUAR </Text>
                </TouchableOpacity> 
                
                <TouchableOpacity style={style.btnVoltar}  >
                  <Text style={{textAlign:'center',fontSize:17}}>Voltar </Text>
                </TouchableOpacity>
          </View>

    );
  }


const style = StyleSheet.create({
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

