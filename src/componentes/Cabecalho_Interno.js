import { assertYieldExpression } from '@babel/types';
import React, {Component} from 'react';
import { View, Image, Modal, StyleSheet, Text, TouchableOpacity, Button}from 'react-native';
import Icone from 'react-native-vector-icons/FontAwesome5';


class Cabecalho  extends Component{


  render(){
    return(

          <View style={style.head}>  
            <Image source={require('../imagens/logo.png')} style={style.img}/>
            <Icone name='user-circle' size={30} color='#011e50' style={style.icone} />
          </View>

    );
  }
}

const style = StyleSheet.create({
  head:{
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    flexDirection:'row',
    alignItems:'center'
  },
  img:{
    width: 150,
    height: 50,
    marginLeft: '30%'
  },
  icone:{
    margin: 15
  }
});

export default Cabecalho;
