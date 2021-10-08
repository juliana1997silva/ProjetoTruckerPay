import React, {Component} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput }from 'react-native';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Icon from'react-native-vector-icons/MaterialIcons';
import Icones from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';


export default function pgtoSucesso({ navigation }){
    
        return(
            <View style={style.container}>

                <View style={{flexDirection:'column', backgroundColor:'#fff', elevation:2, borderBottomColor:'#fff', borderBottomWidth:1, elevation:30, 
                borderBottomLeftRadius:10, borderBottomRightRadius:10, height:130}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <TouchableOpacity style={{marginTop:15}}>
                            <Icon name='keyboard-arrow-left' size={30} color='#011e50' />
                        </TouchableOpacity>
                        <Image source={require('../../../imagens/logo.png')} style={style.img}/>
                        <Icone name='user-circle' size={30} color='#011e50' style={{marginRight:10 ,marginTop:15}} />  
                    </View>
                    <View style={{borderTopColor:'#d3d3d3', borderTopWidth:1, width:'90%', marginLeft:20, marginTop:20}}/>
                    <View style={{ width:'100%', height:60, justifyContent:'center', shadowOffset:{width:0, height:1}, shadowColor:'#d3d3d3'}}>
                        <Text style={{color:'green', fontSize:16, fontWeight:'bold', textAlign:'center'}}>Pagamento realizado com sucesso !!!  </Text>
                    </View>
                    
                
                </View>

               <View style={style.body}>
            
                   <Icones name='checkcircle' size={70} color='green' style={{marginTop:'10%'}} />

                   <ScrollView style={{ width:'90%', borderRadius:20, marginBottom:20, marginTop:'10%', borderColor:'#d3d3d3', borderWidth:1}} >
                   <View >
                        
                    
                       
                    <View style={style.Viewtxt}>
                        <Text style={{color:'#011e50', fontSize: 30, fontWeight:'bold'}}> R$ {' '} [valor boleto] </Text>
                        <View style={{borderTopColor:'#d3d3d3', borderTopWidth:1, width:'90%',marginTop:20}}/>
                    </View>

                    <View style={style.Viewtxt1}>
                        <Text style={style.txt1}> Código de barras: </Text>
                        <Text style={style.txt2}> [n° do codigo de barra] </Text>
                    </View>

                    <View style={style.Viewtxt2}>
                        <Text style={style.txt1}> Beneficiario: </Text>
                        <Text style={style.txt2}> [nome do beneficiario] </Text>
                    </View>

                    <View style={style.Viewtxt2}>
                        <Text style={style.txt1}> Categoria: </Text>
                        <Text style={style.txt2}> [inserir categoria daquele pagamento] </Text>
                    </View>

                    <View style={style.Viewtxt2}>
                        <Text style={style.txt1}> Forma de pagamento: </Text>
                        <Text style={style.txt2}>[inserir forma de pagamento do boleto] </Text>
                    </View>

                    <View style={style.Viewtxt2}>
                        <Text style={style.txt1}> Data / Hora: </Text>
                        <Text style={style.txt2}> [00/00/0000    00:00h] </Text>
                    </View>

                    <View style={style.Viewtxt2}>
                        <Text style={style.txt1}> Pagamento via: </Text>
                        <Text style={style.txt2}> [inserir por onde foi realizado o pagamento] </Text>
                    </View>

                    <View style={style.Viewtxt2}>
                        <Text style={style.txt1}> Banco Liquidante </Text>
                        <Text style={style.txt2}> Fit Bank </Text>
                    </View>

                    <View style={{width:'100%',justifyContent:'center', alignItems:'center', flexDirection:'row',marginTop:'5%'}}>
                        <TouchableOpacity style={style.btn} onPress={()=> navigation.navigate("CameraCodigoBarra")} >  
                            <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}> Outro pagamento </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn } onPress={()=> navigation.navigate("Home")}>
                            <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}> Tela Inicial </Text>
                        </TouchableOpacity>
                    </View>

                        <View style={{width:'100%', justifyContent:'center', alignItems:'center', paddingBottom:20}}>
                            <TouchableOpacity style={{marginTop:10}}>
                                <Text style={{color:'#4FA2DA', fontSize:16, fontWeight:'bold', textDecorationLine:'underline'}}> Compartilhar </Text>
                            </TouchableOpacity>
                        </View>
                    

                       
                   </View>
                   </ScrollView>

                    

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
      alignItems:'center'
    },
    img:{
        width: 150,
        height: 50
      }, 
      Viewtxt:{
        marginTop:30, 
        width:'100%', 
        marginLeft:15
      },
      txt1:{
        fontSize:16, 
        color:'#011e50', 
        fontWeight:'bold'
      },
      txt2:{
        fontSize:14, 
        color:'#011e50'
      },
      Viewtxt1:{
        marginTop:40, 
        width:'100%', 
        marginLeft:15
      },
      Viewtxt2:{
        marginTop:20, 
        width:'100%', 
        marginLeft:15
      },
      btn:{
          backgroundColor:'#4FA2DA',
          justifyContent:'center',
          alignItems:'center',
          width: 150,
          height: 40,
          borderRadius:10,
          margin:'2%'
      }, 
      input:{
          width: 240,
          height: 50,
          backgroundColor:'#fff',
          borderRadius: 15,
          borderWidth:1,
          borderColor:'#011e50',
          elevation:5,
          marginTop:80,
          fontSize: 20,
          textAlign:'center'
      }
});