import { assertYieldExpression } from '@babel/types';
import React, {Component} from 'react';
import { View, Image,  StyleSheet,Text, TextInput,TouchableOpacity}from 'react-native';
import Icone from 'react-native-vector-icons/Entypo';
import Cabecalho from '../componentes/Cabecalho';
import Rodape from '../componentes/Rodape';



export default function SenhaTransacao({ navigation }) {

    return(
            <View style={style.container}>

              <View >  
                <Cabecalho />
              </View>

              
              <View style={style.body}>

              <Text style={style.textBody}> O código será utilizado para   </Text>
              <Text style={style.textBody1}> efetivação de transações  </Text>
              <Text style={style.textBody1}> no Trucker Pay.</Text>

              <Text style={style.textBody3}> *Não utilize a mesma senha </Text>
              <Text style={style.textBody4}> de acesso à sua conta! </Text>

                <View style={{flexDirection:'row', justifyContent:'center', marginBottom:'3%', marginTop:'5%', justifyContent:'flex-start'}}>
                  <TextInput placeholder='*'  style={style.botao1}/>
                  <TextInput placeholder='*'  style={style.botao}/>
                  <TextInput placeholder='*'  style={style.botao}/>
                  <TextInput placeholder='*'  style={style.botao}/>

 
              </View> 
              <Text style={style.textInfo}> Apenas números</Text>

              <View style={style.rodape}>
                  <TouchableOpacity style={style.btnAvancar} onPress={() => navigation.navigate('Biometria')}>
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
  container:{
    backgroundColor: '#001E50',
    flex:1
  },
  body:{
    backgroundColor: '#fff',
    flex:4
  },
  botao:{
    backgroundColor: '#fff',
    width: 57 ,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    elevation: 5,
    textAlign: 'center',
    fontSize: 23,
    margin: 10,
    borderWidth: 1,
    borderColor: '#011e50'
  },
  botao1:{
    backgroundColor: '#fff',
    width: 57 ,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    elevation: 5,
    textAlign: 'center',
    fontSize: 23,
    margin: 10,
    borderWidth: 1,
    borderColor: '#011e50'
  },
  textBody:{
    color:'#001e50',
    fontSize: 24, 
    fontFamily:'Helvetica Neue',
    marginTop:'5%',
    marginLeft:'5%'
  },
  textBody1:{
    color:'#001e50',
    fontSize: 24, 
    fontFamily:'Helvetica Neue',
    marginLeft:'5%'
  },
  textBody2:{
    marginLeft:'5%', 
    fontSize:16
  },
  textBody3:{
    color:'#001e50',
    fontSize: 18, 
    fontFamily:'Helvetica Neue',
    marginLeft:'5%',
    marginTop:'10%'
  },
  textBody4:{
    color:'#001e50',
    fontSize: 18, 
    fontFamily:'Helvetica Neue',
    marginLeft:'5%'
  },
  textInfo:{
    fontFamily:'Helvetica Neue',
    fontSize:14, 
    color:'#707070',
    marginLeft:'5%'
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
