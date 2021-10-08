import React, { useState } from 'react';
import {View, Text, StatusBar, StyleSheet, TouchableOpacity, Modal, Image, PermissionsAndroid} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icone from 'react-native-vector-icons/AntDesign';
import Icones from 'react-native-vector-icons/FontAwesome';


export default function fotoRGVerso({ navigation }){
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
      <StatusBar hidden={true} />
      
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
            style={{marginBottom: 35, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}
            >
              <TouchableOpacity
                onPress={()=> takePicture(camera) }
                style={styles.capture}
              >
                <Text>Tirar foto</Text>
              </TouchableOpacity>
              
            </View>
          );
        }}
      </RNCamera>

      <View style={{position:'absolute', top: 60, left:'10%' }}> 
        <Text style={{color: '#fff', fontSize:18}}> Centralize a VERSO do documento</Text>
      </View>


      { capturedPhoto && 
        <Modal animationType="slide" transparent={false} visible={open}>

          <View style={{flex:1}}>

                  <View style={styles.head}>  
                    <Image source={require('../imagens/logo.png')} style={styles.img}/>
                  </View>
              <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >

                <Image
                  resizeMode="contain"
                  style={{width: 350, height: 450, borderRadius: 15}}
                  source={{ uri: capturedPhoto }}
                />
                <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center', width:'100%', marginTop: '5%'}}>
                    <TouchableOpacity 
                    style={styles.btnTirarOutra}
                    onPress={() => setOpen(false)}
                    >
                      <Text style={{fontSize: 20, color:'#fff', textAlign:'center'}}>Tirar outra</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.btnAvancar}
                    onPress={() => {setIsVisible(true)}}
                    >
                      <Text style={{fontSize: 20, color:'#fff', textAlign:'center'}}>Continuar</Text>
                    </TouchableOpacity>
                </View>
              </View>

          </View>

              <Modal animationType={'slide'} transparent={true} visible={isVisible}>
                    
                    <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)',  flex:1, alignItems:'center'}}>
                      <View style={{width: '97%', height:'70%',backgroundColor:'#fff',  borderTopRightRadius:30, borderTopLeftRadius:30,marginTop:'80%'}}>
                        <Icone name='closecircleo' size={20} color='#000' style={{position:'absolute', right: 20, marginTop:10}}/>
                      <Text style={{color: '#011e50', textAlign: 'center',fontSize: 34, fontFamily:'Helvetica Neue', marginTop:10,fontWeight: 'bold'}}> Atenção!! </Text>
                              
                        <Text style={{color: '#011e50', marginLeft: 20, fontSize:18, fontFamily: 'Helvetica Neue', marginTop:30}}>  
                        <Icones name='circle-o' size={20} color='#011e50' style={styles.circuloText}/> {'  '} Não use acessórios como: boné, óculos, etc.;
                        </Text>
                    
                        <Text style={{color: '#011e50',marginLeft: 20, fontSize:18, fontFamily: 'Helvetica Neue', marginTop:30}}> 
                        <Icones name='circle-o' size={20} color='#011e50' style={styles.circuloText}/> {'  '} Suas imagens são confidenciais; 
                        </Text>
                    
                        <Text style={{color: '#011e50',marginLeft: 20, fontSize:18, fontFamily: 'Helvetica Neue', marginTop:30}}> 
                        <Icones name='circle-o' size={20} color='#011e50' style={styles.circuloText}/> {'  '} Fique atento à iluminação do ambiente; 
                        </Text>
                    
                        <View style={{alignItems: 'center', marginTop:40}}>
                        <TouchableOpacity style={{backgroundColor:'#4fa2da',width:'50%', height:'30%', justifyContent: 'center',
                            alignItems: 'center', borderRadius: 15 }}  onPress={() => navigation.navigate("conheceuTruckerPay")}>
                          <Text style={{fontSize:18, fontFamily:'Nadeem',color:'#fff'}}> CONTINUAR </Text>
                        </TouchableOpacity>
                        </View>
                      </View>
                    
                    </View>
                    </Modal> 

        </Modal>
      }


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center'
  },
  preview:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture:{
    flex: 0,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '15%',
  },
  img:{
    width: 220,
    height: 80
  },
});