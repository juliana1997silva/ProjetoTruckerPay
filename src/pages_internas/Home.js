import React, {useState} from 'react';
import { View, Image,  StyleSheet,Text, TouchableOpacity}from 'react-native';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Icon from'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/Fontisto';
import Ic from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import Icones from 'react-native-vector-icons/SimpleLineIcons';
import { Component } from 'react';

export default function Home({ navigation }){



    return(
        <View style={style.container}>
            
            <View style={{flexDirection:'column', backgroundColor:'#fff', elevation:5, borderBottomColor:'#fff', 
            borderBottomWidth:1, elevation:30, borderBottomLeftRadius:10, borderBottomRightRadius:10, height:230}}>

                <View style={{flexDirection:'row'}}>
                <Image source={require('../imagens/logo.png')} style={style.img}/>
                <Icone name='user-circle' size={30} color='#011e50' style={{marginLeft:50, marginTop:15}} />
                </View>

                <View style={{flexDirection:'row', marginTop:20}}>
                    <Text style={{fontSize:16, marginLeft:15, fontWeight:'bold', color:'#011e50'}}> Seja bem-vindo, Sr(a) Fulano </Text>
                    <Icon name='eye' size={25} color='#001e50' style={{marginLeft:75}} />
                </View>

                <View style={{borderTopColor:'#d3d3d3', borderTopWidth:1, width:'90%', marginLeft:20, marginTop:20}}/>

                <View style={{ width:'100%', height:80, justifyContent:'center', marginTop:10}}>
                    <Text style={{color:'#011e50', fontSize:16, fontWeight:'bold', marginLeft:15, marginBottom:5}}> Saldo em conta corrente </Text>

                    <View style={{flexDirection:'row', marginTop:20}}>
                        <Text style={{color:'#011e50', fontSize:28, marginLeft:15}}> R$ {'    '} [valor] </Text>
                        <TouchableOpacity> 
                            <Ic name='keyboard-arrow-right' size={35} color='#011e50' style={{marginLeft:125}} />
                        </TouchableOpacity>
                    </View>

                </View>
                
            </View>

            <View style={style.body}>


                <ScrollView>
                    
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ height:150,  width:'100%',alignItems:'center', flexDirection:'row' }}>

                            <TouchableOpacity onPress={() => navigation.navigate("FormaPagamento")}>
                                <View style={{margin:10,alignItems:'center'}}>
                                    <View style={style.circulo}>
                                        <Image source={require('../imagens/pagar.png')}/>
                                    </View>
                                    <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}> Pagar </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{margin:10,alignItems:'center'}}> 
                                    <View style={style.circulo}>
                                        <Image source={require('../imagens/cobrar.png')}/>
                                    </View>
                                    <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Cobrar</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{margin:10, alignItems:'center'}}> 
                                    <View style={style.circulo}>
                                        <Ico name='arrow-swap' size={20} color='#011e50'/>
                                    </View>
                                    <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Transferência</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate("Extrato")}  >
                                <View style={{margin:10, alignItems:'center'}}> 
                                    <View style={style.circulo}>
                                    <Image source={require('../imagens/extrato.png')}/>
                                    </View>
                                    <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Extrato</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={{margin:10, alignItems:'center'}}> 
                                    <View style={style.circulo}>
                                        <Ico name='credit-card' size={20} color='#011e50'/>
                                    </View>
                                    <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Crédito</Text>
                                </View>
                            </TouchableOpacity>

                            
                        </View>
                        </ScrollView>


                        <View style={{backgroundColor:'#fff', width:'100%', height: 280, alignItems:'center'}}> 

                            <View style={{backgroundColor:'#233d68', width:'95%', height:230, borderRadius:10,alignItems:'center', justifyContent:'flex-end', marginTop:15, borderWidth:2, borderColor:'#d3d3d3', elevation:3}}>

                                <View style={{flexDirection:'row', width:'100%', marginBottom:10}}> 
                                    <Text style={{color:'#fff', fontWeight:'bold', textDecorationLine:'underline', marginLeft:'2%'}}> [transportadora]</Text> 
                                    <Text style={{color:'#fff', fontWeight:'bold', marginLeft:'15%'}}> [data inicio ] até [data fim]</Text> 
                                </View> 

                                <View style={{backgroundColor:'#233d68', width:'100%', height:190, borderRadius:10,alignItems:'center',}}>

                                    <View style={{backgroundColor:'#fff', borderBottomColor:'#243e69', borderBottomWidth:1, width:'100%', borderTopLeftRadius:10, borderTopRightRadius:10}}>
                                        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                                            <Text style={{color:'#243e69', textAlign:'right', marginTop:5, marginRight:5, marginBottom:5}}> R$ valor disponibilizado</Text> 
                                            <Icones name='arrow-left' size={20}  color='#243e69' style={{ marginTop:0, marginRight:'5%', transform:[{rotate: '135deg'}]}}/>
                                        </View>
                                        <Progress.Bar progress={0.5} color='#243e69' width={320} style={{margin:5, marginTop:0, marginBottom:0}} />
                                        <View style={{flexDirection:'row'}}>
                                            <Icones name='arrow-left' size={20}  color='#243e69' style={{ marginTop:0, marginLeft:'5%', transform:[{rotate: '315deg'}]}}/>
                                            <Text style={{color:'#243e69', textAlign:'left', marginTop:5}}> R$ valor já utilizado</Text> 
                                        </View>                               
                                    </View>

                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} > 
                                        <View style={{ backgroundColor:'#fff', width:'100%', padding:10,alignItems:'center', flexDirection:'row', borderBottomLeftRadius:8, borderBottomRightRadius:8}}>

                                            <View style={{margin:10, alignItems:'center'}}> 
                                                <View style={style.circulo}>
                                                    <Text> valor disp.</Text>
                                                </View>
                                                <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Pernoite</Text>
                                            </View>

                                            <View style={{margin:10, alignItems:'center'}}> 
                                                <View style={style.circulo}>
                                                    <Text> valor disp.</Text>
                                                </View>
                                                <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Refeição</Text>
                                            </View>

                                            <View style={{margin:10, alignItems:'center'}}> 
                                                <View style={style.circulo}>
                                                    <Text> valor disp.</Text>
                                                </View>
                                                <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Abastecer</Text>
                                            </View>

                                            <View style={{margin:10, alignItems:'center'}}> 
                                                <View style={style.circulo}>
                                                    <Text> valor disp.</Text>
                                                </View>
                                                <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Manutenção</Text>
                                            </View>

                                            <View style={{margin:10, alignItems:'center'}}> 
                                                <View style={style.circulo}>
                                                    <Text> valor disp.</Text>
                                                </View>
                                                <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Oficina</Text>
                                            </View>

                                            <View style={{margin:10, alignItems:'center'}}> 
                                                <View style={style.circulo}>
                                                    <Text> valor disp.</Text>
                                                </View>
                                                <Text style={{textAlign:'center', fontWeight:'bold', color:'#011e50', marginTop:5}}>Peças</Text>
                                            </View>

                                        </View>
                                    </ScrollView>
                            </View>

                        </View> 

                        
                        </View>
                        <View style={{width:'100%', alignItems:'center', margin:0, height:180,justifyContent:'flex-end', 
                                        borderRadius:15,  borderWidth:1, borderColor:'#d3d3d3', backgroundColor:'#243e69'}}>                                        
                                                <Text style={{color:'#fff', width:'100%', marginLeft:20, marginBottom:5, fontWeight:'bold', fontSize:16}}> Cartão de Crédito  </Text>
                            <View style={{width:'100%', margin:0, height:145,
                                        justifyContent:'center', borderRadius:15, backgroundColor:'#fff', justifyContent:'flex-end'}}>
                                <View style={{borderBottomWidth:1, borderBottomColor:'#d3d3d3', width:'95%', marginLeft:10, padding:10}}> 
                                    <Text style={{fontSize: 16, fontWeight:'bold'}}> Fatura Atual</Text>
                                    <Text style={{fontSize: 25}}> R$ {'    '}[valor] </Text>
                                </View>

                                <View style={{flexDirection:'row', width:'100%', height:40, justifyContent:'center', alignItems:'center', padding:0}}>
                                    <Text> Saldo Disponivel R$ [VALOR] </Text> 
                                    <TouchableOpacity style={{height: '100%',justifyContent:'center', alignItems:'center',borderLeftWidth:1, borderLeftColor:'#d3d3d3',marginLeft:40, }}>
                                        <Text style={{fontWeight:'bold', marginLeft:20,  fontSize:16}}> Extrato </Text>
                                    </TouchableOpacity>
                                </View>

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
    txtBody:{
        color:'#011e50',
        fontWeight:'bold',
        fontFamily:'Helvetica Neue',
        fontSize: 14,
        marginTop:'5%'
    },
    circulo:{
        height: 60,
        width: 60,
        borderRadius: 60,
        borderColor:'#d3d3d3',
        borderWidth:1,
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#fff',
        elevation:4
    },
    icone:{
        margin: 15
    },
    img:{
        width: 150,
        height: 50,
        marginLeft: '30%'
      }
});