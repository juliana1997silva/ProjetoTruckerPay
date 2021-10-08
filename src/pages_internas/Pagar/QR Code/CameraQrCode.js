import { assertYieldExpression } from '@babel/types';
import React, { useState } from 'react';
import {View, Text, StatusBar, StyleSheet, TouchableOpacity, Modal, Image, PermissionsAndroid} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Icones from 'react-native-vector-icons/MaterialIcons';


export default function CameraQrCode({navigation}){

  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [open, setOpen] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  async function takePicture(camera){
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);

    setCapturedPhoto(data.uri);
    setOpen(true);
    console.log('FOTO TIRADA CAMERA: ' + data.uri);
  }
  

  return(
    <View style={styles.container}>
        <View style={{flexDirection:'column', backgroundColor:'#fff', elevation:2, borderBottomColor:'#fff', borderBottomWidth:1, elevation:30, borderBottomLeftRadius:10, 
        borderBottomRightRadius:10, alignItems:'center' }}>
                <View style={{flexDirection:'row', width: '100%', alignItems:'center', marginTop:10, justifyContent:'space-between'}}>
                    <Icones name='keyboard-arrow-left' size={30} />
                    <Image source={require('../../../imagens/logo.png')} style={styles.img}/>
                    <Icone name='user-circle' size={30} color='#011e50' style={{marginRight:10 ,marginTop:15}} />
                </View>

            <View style={{borderTopColor:'#d3d3d3', borderTopWidth:1, width:'90%', marginLeft:20, marginTop:20}}/>
                <View style={{ width:'100%', height:60, justifyContent:'center', shadowOffset:{width:0, height:1}, shadowColor:'#d3d3d3', marginTop:10}}>
                    <Text style={{color:'#011e50', fontSize:20, fontWeight:'bold', textAlign:'center'}}> Centralize o QR Code </Text>

                    <View style={{width:'100%', justifyContent:'space-between', flexDirection:'row', marginTop:10, paddingBottom:10}}>
                      <Text style={{color:'#011e50', fontSize:17, marginLeft:10}}> Saldo para esta transação </Text>
                      <View >
                      <Text style={{color:'#011e50', fontSize:17}}> R$ 10.000.000,00 </Text>
                      </View>
                    </View>
            </View>

        </View>
      
      <RNCamera
        style={styles.preview}
        type={type}
        flashMode={RNCamera.Constants.FlashMode.auto}
        androidCameraPermissionOptions={{
          title: 'Permissao para usar a camera',
          message: 'Nós precisamos usar a sua camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar'
        }}
      >
        { ({ camera, status, recordAndroidPermissionStatus }) => {
          if(status !== 'READY') return <View/>;
          return(

            

            <View 
            style={{marginBottom: 35,  alignItems: 'flex-end', justifyContent: 'space-between',  justifyContent:'center', alignItems:'center', width:'100%'}}>
              
              <TouchableOpacity style={styles.capture} onPress={()=> navigation.navigate("digiteCNPJ")}  >
                <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>Digitar CNPJ</Text>
              </TouchableOpacity>
              
            </View>
          );
        }}
      </RNCamera>

        


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  preview:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture:{
    flex: 0,
    width:185,
    height:38,
    backgroundColor: '#4FA2DA',
    borderRadius: 13,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30
  },
  camPosition:{
    backgroundColor: '#FFF',
    borderRadius:5,
    padding: 10,
    height: 40,
    position: 'absolute',
    right: 25,
    top: 60,
  },
  btnAvancar:{
    borderColor:'#707070',
    borderWidth:1, 
    width:130, 
    height:40,
    borderStyle:'solid',
    borderRadius:5,
    backgroundColor:'#4FA2DA',
    fontFamily: 'Helvetica Neue',
    alignContent:'center',
    justifyContent: 'center',
    marginRight: '4%'
  },
  btnTirarOutra:{
    borderColor:'#707070',
    borderWidth:1, 
    width:130, 
    height:40,
    borderStyle:'solid',
    borderRadius:5,
    backgroundColor:'#C14444',
    fontFamily: 'Helvetica Neue',
    alignContent:'center',
    justifyContent: 'center',
    marginLeft: '4%'
  },
  head:{
    backgroundColor: '#001E50',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '15%',
  },
  img:{
    width: 150,
    height: 50
  },
});