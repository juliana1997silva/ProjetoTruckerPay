import React, {useState} from 'react';
import { Component } from 'react';
import { View, StyleSheet,Text, Image, TextInput, TouchableOpacity,ScrollView, Modal}from 'react-native';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Icones from 'react-native-vector-icons/MaterialCommunityIcons';
import Ico from 'react-native-vector-icons/Ionicons';
import Iconees from 'react-native-vector-icons/AntDesign';
import Icoones from 'react-native-vector-icons/FontAwesome';


export default function Extrato({ navigation }){

   const [isVisible, setIsVisible] =useState(false);
    

  

    return(
        <View style={style.container}>


            {/** MODAL PARA O BOTÃO OUTROS  */}

            <Modal animationType={'slide'} transparent={true} visible={isVisible}>
      
                    <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)',  flex:1, alignItems:'center'}}>
                        <View style={{width: '97%', height:'70%',backgroundColor:'#fff',  borderTopRightRadius:30, borderTopLeftRadius:30,marginTop:'80%'}}>

                            {/** VIEW RESPONSAVEL PELO 'X' DE FECHAR O MODAL */}
                            <View style={{flexDirection:'row-reverse', marginLeft:'3%', marginTop:'3%'}}>
                                <TouchableOpacity> 
                                    <View style={{width:25, height:25, borderRadius:25, backgroundColor:'#d3d3d3', justifyContent:'center', alignItems:'center'}}>
                                        <Ico name='close-outline' size={25} color='#011e50' />
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/** VIEW RESPONSAVEL PELO TITULO DO MODAL */}
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                <Text style={{color:'#011e50', fontSize:24, fontWeight:'bold',textDecorationLine:'underline'}}>Ou</Text>
                                <Text style={{color:'#011e50', fontSize:24, fontWeight:'bold'}}>tro período</Text>
                            </View>

                            {/** VIEW RESPONSAVEL PELOS INPUTS DE DATA */}
                            <View style={{justifyContent:'center', alignItems:'center', margin:'5%'}}>
                                <View style={{width:'90%', justifyContent:'center', alignItems:'flex-start'}} >
                                    <Text style={{color:'#011e50', fontSize:15, fontWeight:'bold'}}>De</Text>
                                    <TextInput 
                                    style={{borderRadius:7, borderColor:'#d3d3d3', borderWidth:1, width:'100%', backgroundColor:'#d3d3d3', fontSize:18}} 
                                    placeholder='00/00/0000'>
                                    </TextInput>

                                    <Text style={{color:'#011e50', fontSize:15, fontWeight:'bold', marginTop:'5%'}}>Até</Text>
                                    <TextInput 
                                    style={{borderRadius:7, borderColor:'#d3d3d3', borderWidth:1, width:'100%', backgroundColor:'#d3d3d3', fontSize:18}} 
                                    placeholder='00/00/0000'> 
                                    </TextInput>
                                </View>
                            </View>

                            {/** BOTÃO PARA APLICAR A ESCOLHA DO CLIENTE */}
                            <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                                <TouchableOpacity style={{backgroundColor:'#4fa2da', width:'50%', height:'30%', borderRadius:15, justifyContent:'center', alignItems:'center', opacity:0.9}}>
                                    <Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}> Aplicar </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
            </Modal> 



            
            <View style={{flexDirection:'column', backgroundColor:'#fff', elevation:2, borderBottomColor:'#fff', borderBottomWidth:1, elevation:30, borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Image source={require('../../imagens/logo.png')} style={style.img}/>
                <Icone name='user-circle' size={30} color='#011e50' style={{marginRight:10, marginTop:15}} />
                </View>
                <View style={{borderTopColor:'#d3d3d3', borderTopWidth:1, width:'90%', marginLeft:20, marginTop:20}}/>

                <View style={{ width:'100%', height:35, justifyContent:'space-between', shadowOffset:{width:0, height:1}, shadowColor:'#d3d3d3', flexDirection:'row', marginTop:'3%'}}>
                    <Text style={{color:'#011e50', fontSize:15, fontWeight:'bold', marginLeft:'4%'}}> Saldo em conta </Text>
                    <View style={{flexDirection:'row', marginRight:'5%'}}>
                        <Text style={{color:'#011e50', fontSize:15, fontWeight:'bold'}}> R$ 10.400,00 </Text>
                        <TouchableOpacity> 
                            <Icones name='eye' size={20} color='#001e50' />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>

            <View style={style.body}> 
                    
                    <TextInput style={{borderColor:'#b6b6bc', borderWidth:1, width:'95%', height:30, marginTop:'5%', backgroundColor:'#b6b6bc', borderRadius:6, padding:0, textAlign:'left', opacity:0.5}} placeholder='Pesquisa'  > 
                    <Icone name='search' size={15} color='#011e50'   />
                    </TextInput>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'2%'}}> 

                        <TouchableOpacity style={{borderColor:'#c1c1c1',borderWidth:1, borderRadius:2, margin:'2%'}} >
                            <Text> 7 dias </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{borderColor:'#c1c1c1',borderWidth:1, borderRadius:2, margin:'2%'}}>
                            <Text> 15 dias </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{borderColor:'#c1c1c1',borderWidth:1, borderRadius:2, margin:'2%'}}>
                            <Text> 30 dias </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{borderColor:'#c1c1c1',borderWidth:1, borderRadius:2, margin:'2%'}}  onPress={() => setIsVisible(true)}>
                            <Text> Outros </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', width:'100%', marginTop:'5%', marginLeft:'8%'}}>
                        <Text style={{textDecorationLine:'underline', color:'#011e50', fontWeight:'bold', fontSize:21}}>Hi</Text> 
                        <Text style={{color:'#011e50', fontWeight:'bold', fontSize:21}}>stórico</Text>
                    </View>

                    <ScrollView style={{width:'100%'}}>

                   {/** historico do dia atual */}
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>                       
                            <Icones name='fuel' size={30} color='#011e50' />

                            {/** abastecimento */}

                       <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento realizado</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 10,00</Text>

                    </View>

                    {/** refeição */}

                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>                       
                            <Icoones name='cutlery' size={25} color='#011e50' />

                        <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento realizado</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 10,00</Text>

                    </View>

                        {/** hotel/pernoite */}
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>                       
                            <Icoones name='hotel' size={25} color='#011e50' />

                        <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento realizado</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 10,00</Text>

                    </View>

                    {/** Oficina */}

                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>                       
                            <Icone name='screwdriver' size={25} color='#011e50' />

                        <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento realizado</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 10,00</Text>

                    </View>

                        {/** Manutenção */}
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>                       
                            <Icones name='hammer-screwdriver' size={25} color='#011e50' />

                        <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento realizado</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 10,00</Text>

                    </View>

                        {/** Peças */}

                        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>                       
                            <Icones name='screw-lag' size={25} color='#011e50' />

                        <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento realizado</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 10,00</Text>

                    </View>

                    {/** Cashback */}

                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>
                        
                            <Icone name='hand-holding-usd' size={30} color='#011e50' />
                              

                       <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento recebido</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>CashBack</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 10,00</Text>

                    </View>

                    {/** recebimento / entrada */}

                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>
                            <Iconees name='arrowdown' size={25} color='#011e50' />

                       <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Transferência recebida</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome</Text>
                       </View>

                       <Text style={{color:'green', fontWeight:'bold', fontSize:15}}> + R$ 10,00</Text>

                    </View>

                        {/** pagamento / saída */}

                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>
                            <Iconees name='arrowup' size={25} color='#011e50'  />

                       <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Transferencia efetuada</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 0,20</Text>

                    </View>


                     {/** pagamento boleto  */}

                     <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>
                            <Iconees name='barcode' size={25} color='#011e50'  />

                       <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento boleto</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 0,20</Text>

                    </View>


                    {/** pagamento QR-Code  */}

                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>
                            <Iconees name='qrcode' size={25} color='#011e50'  />

                       <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento QR-Code</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 0,20</Text>

                    </View>
                   

                    


                  {/** HISTORICO DE TRANSAÇÃO DO DIA ANTERIOR */}

                  <View style={{flexDirection:'row', justifyContent:'space-between', padding:10, width:'100%', marginTop:'5%'}}>
                        <Text style={{fontSize:16, color:'#011e50', fontWeight:'bold'}}>Qua - 22,Set</Text>
                        
                  </View>
                  


                  {/** pagamento QR-Code  */}

                  <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>
                            <Iconees name='qrcode' size={25} color='#011e50'  />

                       <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento QR-Code</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 0,20</Text>

                    </View>
            
                    {/** pagamento boleto  */}

                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>
                            <Iconees name='barcode' size={25} color='#011e50'  />

                       <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento boleto</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 0,20</Text>

                    </View>

                    {/** Manutenção */}
                    <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', padding:10}}>                       
                            <Icones name='hammer-screwdriver' size={25} color='#011e50' />

                        <View>
                           <Text style={{fontSize:10, color:'#d3d3d3'}}>Pagamento realizado</Text>
                           <Text style={{fontSize:11, color:'#011e50', fontWeight:'bold'}}>Nome estabelecimento</Text>
                       </View>

                       <Text style={{color:'#ff0000', fontWeight:'bold', fontSize:15}}> - R$ 10,00</Text>

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
        height: 50,
        marginLeft: '30%'
      },
    circulo:{
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#f6f6f6'
    },
    viewModal:{
        width: '97%', 
        height:'60%',
        backgroundColor:'#fff',  
        borderRadius:30, 
        borderTopLeftRadius:30
      }

  
});