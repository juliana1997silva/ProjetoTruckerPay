import React, {useState} from 'react';
import { View,  Modal, StyleSheet, Text, TouchableOpacity, Button,TextInput}from 'react-native';
import Icone from 'react-native-vector-icons/AntDesign';
import Cabecalho from '../componentes/Cabecalho';



export default function conheceuTruckerPay({ navigation }) {

  const [isVisible, setIsVisible] = useState(false);
  


    return(
 
    <View style={style.container}> 

<Modal animationType={'fade'} transparent={true} visible={isVisible}>
      
      <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)',  flex:1, alignItems:'center',justifyContent: 'center'}}>
        <View style={style.viewModal}>
          <View style={{position: 'absolute', right:20, top: 10}}> 
            <Icone name='closecircleo' size={20} color='#000' style={{position:'absolute', right: 20, marginTop:10}}/>
          </View>
                <TextInput placeholder='Como você conheceu o Trucker Pay ?' multiline={true}  style={{width:300, height: 80, borderWidth:1, borderColor:'#011e50', borderRadius:10}}> 
                </TextInput>
          
          <View style={{alignItems: 'center', justifyContent: 'center',
                alignItems: 'center',bottom:0}}>

            <TouchableOpacity style={{backgroundColor:'#4fa2da',width:160, height:50, justifyContent: 'center',
                alignItems: 'center', borderRadius: 10, top:25 }} onPress={()=> navigation.navigate("analiseConta")}   >
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
                <Text style={style.textBody}> Como você conheceu o Trucker Pay ?</Text>

                <Text style={style.textBody1}> Nos conte como chegou até aqui </Text>
                
                <TouchableOpacity style={style.botao} > 
                  <Text style={style.btnTexto}> Facebook </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao1} > 
                  <Text style={style.btnTexto}> LinkedIn </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao1} > 
                  <Text style={style.btnTexto}> Instagram </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao1} > 
                  <Text style={style.btnTexto}> Anuncios de parceiros </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao1} > 
                  <Text style={style.btnTexto}> Youtube </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao1} > 
                  <Text style={style.btnTexto}> Indicação </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.botao1} onPress={() => setIsVisible(true)}> 
                  <Text style={style.btnTexto}> Outros </Text>
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
    flex:4,
    alignItems: 'center'
  },
  rodape:{
    backgroundColor: '#fff',
    flex:1,
    marginLeft:15
  },
  botao:{
    backgroundColor: '#fff',
    width: 270 ,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 40,
    elevation: 5,
    borderColor:'#011e50',
    borderWidth:1
  },
  btnTexto:{
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#011e50',
    marginLeft:15,
    textAlign:'center'
  },
  textBody:{
    color:'#001e50',
    fontSize:20, 
    fontFamily:'Helvetica Neue', 
    marginTop:'5%'
  },
  textBody1:{
    color:'#707070',
    fontSize:18, 
    fontFamily:'Helvetica Neue', 
    marginTop:'1%'
  },
  botao1:{
    backgroundColor: '#fff',
    width: 270 ,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: '5%',
    elevation: 5,
    borderColor:'#011e50',
    borderWidth:1
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
    height:'45%',
    backgroundColor:'#fff',  
    borderRadius:30, 
    borderTopLeftRadius:30,
    alignItems: 'center',
    justifyContent: 'center'
  }


});

