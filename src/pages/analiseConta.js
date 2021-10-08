import React, {Component} from 'react';
import { View, Image, Modal, StyleSheet, Text, TouchableOpacity}from 'react-native';
import Cabecalho from '../componentes/Cabecalho';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';



export default function analiseConta({navigation}){


    return(
 
    <View style={style.container}> 

              <View >  
                <Cabecalho />
              </View>

            <View style={{justifyContent:'center', alignItems:'center', marginTop:'15%'}}>
                <View style={style.circle}> 
                    <Icone name='timer-sand' size={90} color='#011e50' />
                </View>
            </View>

        <View style={{marginLeft:'5%', marginTop:'15%'}}>
            <Text style={{color:'#011e50', fontSize:17}}>Estamos analisando o seu cadastro.</Text>
            <Text style={{color:'#011e50', fontSize:17}}>Entraremos em contato em até 3 dias úteis.</Text>
        </View>

        <View style={{alignItems: 'center', marginTop:'35%'}}>
          <TouchableOpacity style={{backgroundColor:'#4fa2da',width:180, height: 50, justifyContent: 'center',
              alignItems: 'center', borderRadius: 15 }} onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize:18, fontFamily:'Nadeem',color:'#fff'}}> FINALIZAR </Text>
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
  circle: {
    height: 200,
    width: 200,
    borderRadius: 200,
    borderColor:'#011e50',
    borderWidth:10,
    justifyContent:'center', 
    alignItems:'center'
  }
  

});