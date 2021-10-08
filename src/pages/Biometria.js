import React from 'react';
import { View,  StyleSheet,Text, TouchableOpacity}from 'react-native';
import Icone from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';




export default function Biometria({ navigation }) {

    return(
            <View style={style.container}>

              <View >  
                < Cabecalho />
              </View>

              
              <View style={style.body}>
                <View style={{justifyContent: 'center',alignItems: 'center', marginTop:'30%'}}>
                <Icone name='finger-print' size={80} color='#001e50' />
                </View>

              <Text style={{color:'#001e50', fontSize:20, fontFamily:'Helvetica Neue', textAlign:'center', marginTop:'10%'}}>
                Gostaria de habilitar a biometria ?
              </Text>
              <Text style={{textAlign:'center',fontSize:14, fontFamily:'Helvetica Neue'}}>
                A biometria serve para que você possa 
              </Text>
              <Text style={{textAlign:'center',fontSize:14, fontFamily:'Helvetica Neue'}}>
              acessar o aplicativo com maior segurança.
              </Text>

              <View >
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
                  style={{alignItems:'center', margin:20, marginTop:'10%'}}
                
                />
                  
              </View>
 
              </View> 

              <View style={style.rodape}>
                  <TouchableOpacity style={style.btnAvancar} onPress={() => navigation.navigate('TipoDocumento')}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>CONTINUAR </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={style.btnVoltar} onPress={() => navigation.goBack()} >
                    <Text style={{ textAlign: 'center', fontSize: 17 }}>Voltar </Text>
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
    width: 316 ,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 30,
    elevation: 10,
    textAlign: 'center',
    fontSize: 23,
    marginLeft:'10%',
    marginRight:'5%',
    marginTop:'10%'
  },
  textBody:{
    color:'#001e50',
    fontSize: 24, 
    fontFamily:'Helvetica Neue',
    marginTop:'10%',
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
    marginLeft:'10%'
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
