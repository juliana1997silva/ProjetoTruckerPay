import React, {useState} from 'react';
import { View,  StyleSheet,Text, TextInput,TouchableOpacity, Modal}from 'react-native';
import Icone from 'react-native-vector-icons/AntDesign';
import Cabecalho from '../componentes/Cabecalho';


export default function EnderecoSMS({ navigation }) {

  const [isVisible, setIsVisible] = useState(false)

    return(
            <View style={style.container}>

<Modal animationType={'none'} transparent={true} visible={isVisible}>
      
      <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)',  flex:1, alignItems:'center',justifyContent: 'center'}}>
        <View style={style.viewModal}>
          <Icone name='closecircleo' size={20} color='#000' style={{position:'absolute', right: 20, marginTop:10}}/>
        <Text style={style.txtModal}> 
        Digite o código de verificação  </Text>
        <Text style={style.txtModal1}> enviado via SMS </Text>
                <TextInput placeholder='Código de verificação' style={style.botaoSMS}> 
                </TextInput>
          
          <View style={{alignItems: 'center', marginTop:'5%'}}>
          <TouchableOpacity style={{backgroundColor:'#4fa2da',width:'55%', height:'35%', justifyContent: 'center',
              alignItems: 'center', borderRadius: 15 }}
              onPress={()=> navigation.navigate("SenhaApp")}>
            <Text style={{fontSize:18, fontFamily:'Nadeem',color:'#fff'}}> CONTINUAR </Text>
          </TouchableOpacity>
         
          </View>
        </View>

        </View>
    </Modal> 

              <View >  
                <Cabecalho />
              </View>

              
              <View style={style.body}>
 
              <Text style={style.textBody1}> Estamos quase lá! </Text>

                <Text style={style.textBody}> Digite o seu C.E.P.  </Text>
                <TextInput placeholder='00000-000'  style={style.botao}/>

                <Text style={style.textBody2}> Endereço  </Text>
                <TextInput placeholder='Endereço'  style={style.botao}/>

                <View style={{flexDirection:'row'}}>

                <Text style={style.textBody2}> Número  </Text>
                <Text style={style.textBody3}> Complemento  </Text>

                </View>

                <View style={{flexDirection:'row'}}>

                <TextInput placeholder='1234'  style={style.botao1}/>
                <TextInput placeholder='Complemento'  style={style.botao3}/>

                </View>

                <Text style={style.textBody2}> Bairro  </Text>
                <TextInput placeholder='Bairro'  style={style.botao}/>

                <Text style={style.textBody2}> Cidade / UF  </Text>
                <TextInput placeholder='Cidade / UF'  style={style.botao}/>

 
               

              <View style={style.rodape}>
              <TouchableOpacity style={style.btnAvancar} onPress={()=> setIsVisible(true)}>
                  <Text style={{textAlign:'center',color:'#fff',fontSize:16}}>CONTINUAR </Text>
                </TouchableOpacity> 
                
                <TouchableOpacity style={style.btnVoltar} onPress={()=> navigation.goBack()}>
                  <Text style={{textAlign:'center',fontSize:17}}>Voltar </Text>
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
    flex:4.5
  },
  botao:{
    backgroundColor: '#fff',
    width: 325 ,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    elevation: 5,
    textAlign: 'center',
    fontSize: 18,
    marginLeft:'5%',
    marginRight:'5%',
    marginTop:'1%',
    padding: 0
  },
  botao1:{
    backgroundColor: '#fff',
    width: 100 ,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    elevation: 5,
    textAlign: 'center',
    fontSize: 18,
    marginLeft:'5%',
    marginRight:'5%',
    marginTop:'2%',
    padding: 0
  },
  botao2:{
    backgroundColor: '#fff',
    width: 180 ,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    elevation: 5,
    textAlign: 'center',
    fontSize: 18,
    marginLeft:'5%',
    marginRight:'5%',
    marginTop:'2%',
    padding: 0
  },
  botao3:{
    backgroundColor: '#fff',
    width: 205 ,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    elevation: 5,
    textAlign: 'center',
    fontSize: 18,
    marginRight:'5%',
    marginTop:'2%',
    padding: 0
  },
  textBody:{
    color:'#001e50',
    fontSize: 20, 
    fontFamily:'Helvetica Neue',
    marginLeft:'5%', 
    marginTop:'3%'
  },
  textBody2:{
    color:'#001e50',
    fontSize: 20, 
    fontFamily:'Helvetica Neue',
    marginLeft:'5%', 
    marginTop:'3%'
  },
  textBody1:{
    color:'#001e50',
    fontSize: 20, 
    fontFamily:'Helvetica Neue', 
    marginTop:'5%',
    textAlign:'center'
  },
  textBody3:{
    color:'#001e50',
    fontSize: 20, 
    fontFamily:'Helvetica Neue',
    marginLeft:'5%', 
    marginTop:'3%'
  },
  textInfo:{
    fontFamily:'Helvetica Neue',
    fontSize:14, 
    color:'#707070',
    marginLeft:'10%', 
    marginTop:'5%'
  },
  txtModal:{
    color: '#011e50', 
    textAlign: 'center',
    fontSize: 18, 
    fontFamily:'Helvetica Neue', 
    marginTop:40
  },
  txtModal1:{
    color: '#011e50', 
    textAlign: 'center',
    fontSize: 18, 
    fontFamily:'Helvetica Neue'
  },
  viewModal:{
    width: '97%', 
    height:'60%',
    backgroundColor:'#fff',  
    borderRadius:30, 
    borderTopLeftRadius:30
  },
  botaoSMS:{
    backgroundColor: '#fff',
    width: 325 ,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
    elevation: 5,
    textAlign: 'center',
    fontSize: 18,
    marginLeft:'5%',
    marginRight:'5%',
    marginTop:'5%',
    padding: 0
  },
  rodape:{
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:'30%',
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
