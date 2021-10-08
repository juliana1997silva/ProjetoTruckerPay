import { assertYieldExpression } from '@babel/types';
import CheckBox from '@react-native-community/checkbox';
import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Ico from 'react-native-vector-icons/Fontisto';
import Cabecalho from '../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';



export default function Email({ navigation }) {

  return (
    <View style={style.container}>

      <View >
        < Cabecalho />
      </View>


      <View style={style.body}>

        <Text style={style.textBody1}> Estamos quase lá! </Text>
        <Text style={style.textBody}> Digite seu e-mail: </Text>

        <TextInput placeholder='exemplo@exemplo.com.br' style={style.botao} />

        <View style={{ flexDirection: 'row', left: '2%' }}>
          <CheckBox style={{ marginTop: '5%' }} />
          <Text style={style.textInfo}>
            Gostaria de receber nossas novidades atráves {'     '}{'     '} do seu e-mail ? </Text>
        </View>

        <View style={style.rodape}>
          <TouchableOpacity style={style.btnAvancar} onPress={() => navigation.navigate('Celular')}>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>CONTINUAR </Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.btnVoltar} onPress={() => navigation.goBack()} >
            <Text style={{ textAlign: 'center', fontSize: 17 }}>Voltar </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>

  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: '#001E50',
    flex: 1
  },
  body: {
    backgroundColor: '#fff',
    flex: 4
  },
  botao: {
    backgroundColor: '#fff',
    width: 320,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    elevation: 10,
    textAlign: 'center',
    fontSize: 23,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '6%'
  },
  textBody: {
    color: '#001e50',
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    marginLeft: '5%',
    marginTop: '10%'
  },
  textBody1: {
    color: '#001e50',
    fontSize: 20,
    fontFamily: 'Helvetica Neue',
    marginTop: '5%',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textInfo: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    color: '#707070',
    marginTop: '5%'
  },
  rodape: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '50%',
    width: '100%'
  },
  btnVoltar: {
    width: 130,
    height: 40,
    marginTop: 10
  },
  btnAvancar: {
    width: 130,
    height: 40,
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#4FA2DA',
    elevation: 5
  }

});

