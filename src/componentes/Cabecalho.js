import { assertYieldExpression } from '@babel/types';
import React, {Component} from 'react';
import { View, Image, Modal, StyleSheet, Text, TouchableOpacity, Button}from 'react-native';


class Cabecalho  extends Component{


  render(){
    return(

          <View style={style.head}>  
            <Image source={require('../imagens/logo.png')} style={style.img}/>
          </View>

    );
  }
}

const style = StyleSheet.create({
  head:{
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100
  },
  img:{
    width: 220,
    height: 80
  }
});

export default Cabecalho;
