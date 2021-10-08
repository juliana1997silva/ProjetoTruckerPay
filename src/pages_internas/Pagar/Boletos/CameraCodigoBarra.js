import React, { useState } from 'react';
import {View, Text, StatusBar, StyleSheet, TouchableOpacity, Modal, Image, PermissionsAndroid} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Icones from 'react-native-vector-icons/MaterialIcons';


export default function CameraCodigoBarra({navigation}){
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
        borderBottomRightRadius:10, alignItems:'center', height:120 }}>
                <View style={{flexDirection:'row', width: '100%', alignItems:'center', justifyContent:'space-between'}}>
                    <Icones name='keyboard-arrow-left' size={30} />
                    <Image source={require('../../../imagens/logo.png')} style={styles.img}/>
                    <Icone name='user-circle' size={30} color='#011e50' style={{marginRight:10 ,marginTop:15}} />
                </View>

            <View style={{borderTopColor:'#d3d3d3', borderTopWidth:1, width:'90%', marginLeft:20, marginTop:5}}/>
                <View style={{ width:'100%', height:60, justifyContent:'center', shadowOffset:{width:0, height:1}, shadowColor:'#d3d3d3'}}>
                    <Text style={{color:'#011e50', fontSize:18, fontWeight:'bold', textAlign:'center'}}> Centralize o código de barras </Text>
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
            style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}
            >
              <TouchableOpacity
                style={styles.capture} onPress={()=> navigation.navigate("CodigoBarra")}   >
                <Text style={{textAlign:'center', color:'#fff', fontWeight:'bold', fontSize:18}}>Digite o código de barras</Text>
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
    backgroundColor: '#4fa2da',
    borderRadius:30,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
    width: 293,
    height:40,
    justifyContent:'center'
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