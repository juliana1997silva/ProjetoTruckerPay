import React from 'react';
import { View, StyleSheet,Text, TextInput,TouchableOpacity}from 'react-native';
import Cabecalho from '../componentes/Cabecalho';



export default function SenhaApp({ navigation }) {

  
    return(
            <View style={style.container}>

              <View >  
                <Cabecalho/>
              </View>

              
              <View style={style.body}>

              <Text style={style.textBody}> Crie uma senha de 8 dígitos </Text>
              <Text style={style.textBody1}> para usar o app: </Text>
              
                <TextInput placeholder='********'  style={style.botao}/>
                
                <Text style={style.textInfo}>  </Text>

                <Text style={style.textBody2}> Mínimo 1 letra maiúscula </Text>
                <Text style={style.textBody2}> Mínimo 1 letra minúscula </Text>
                <Text style={style.textBody2}> Mínimo 1 letra número</Text>
                <Text style={style.textBody2}> Mínimo 1 letra caractere especial (@,#,$,%...)</Text>
 
                <View style={style.rodape}>
                  <TouchableOpacity style={style.btnAvancar} onPress={() => navigation.navigate('SenhaTransacao')}>
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
    width: 316 ,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 30,
    elevation: 10,
    textAlign: 'center',
    fontSize: 23,
    marginLeft:'5%',
    marginRight:'5%',
    marginTop:'10%'
  },
  textBody:{
    color:'#001e50',
    fontSize: 20, 
    fontFamily:'Helvetica Neue',
    marginTop:'10%',
    textAlign:'center'
  },
  textBody1:{
    color:'#001e50',
    fontSize: 20, 
    fontFamily:'Helvetica Neue', 
    textAlign:'center'
  },
  textBody2:{
    marginLeft:'5%', 
    fontSize:16
  },
  textInfo:{
    fontFamily:'Helvetica Neue',
    fontSize:14, 
    color:'#707070',
    marginLeft:'5%', 
    marginTop:'5%'
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