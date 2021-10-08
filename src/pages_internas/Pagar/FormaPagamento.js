import React, { useState } from 'react';
import { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icone from 'react-native-vector-icons/FontAwesome5';
import Icones from 'react-native-vector-icons/FontAwesome';


export default function FormaPagamento({ navigation }){

   

        return (
            <View style={style.container}>

                <View style={{ flexDirection: 'column', backgroundColor: '#fff', elevation: 2, borderBottomColor: '#fff', borderBottomWidth: 1, elevation: 30, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../imagens/logo.png')} style={style.img} />
                        <Icone name='user-circle' size={30} color='#011e50' style={{ marginLeft: 50, marginTop: 15 }} />
                    </View>
                    <View style={{ borderTopColor: '#d3d3d3', borderTopWidth: 1, width: '90%', marginLeft: 20, marginTop: 20 }} />
                    <View style={{ width: '100%', height: 60, justifyContent: 'center', shadowOffset: { width: 0, height: 1 }, shadowColor: '#d3d3d3' }}>
                        <Text style={{ color: '#011e50', fontSize: 16, fontWeight: 'bold', marginLeft: 30 }}>Confirme a forma de pagamento</Text>
                    </View>

                </View>

                <View style={style.body}>

                    <TouchableOpacity style={{
                        flexDirection: 'row', alignItems: 'center', width: 280, height: 75, borderColor: '#d3d3d3', borderWidth: 1,
                        borderRadius: 15, marginTop: 60, backgroundColor: '#fff', elevation: 4}} onPress={()=> navigation.navigate("CameraCodigoBarra")} >
                        <Icones name='barcode' size={35} color='#001e50' style={{ marginLeft: 20 }} />
                        <Text style={{ marginLeft: 15, fontSize: 18, color: '#011e50', fontWeight: 'bold' }}> Código de barras</Text>
                    </TouchableOpacity>  

                    <TouchableOpacity style={{
                        flexDirection: 'row', alignItems: 'center', width: 280, height: 75, borderColor: '#d3d3d3', borderWidth: 1,
                        borderRadius: 15, marginTop: 20, backgroundColor: '#fff', elevation: 4}} onPress={()=> navigation.navigate("CameraQrCode")}  > 

                        <Icones name='qrcode' size={35} color='#001e50' style={{ marginLeft: 20 }} />
                        <Text style={{ marginLeft: 15, fontSize: 18, color: '#011e50', fontWeight: 'bold' }}> QR Code </Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    body: {
        backgroundColor: '#fff',
        flex: 4,
        alignItems: 'center'
    },
    img: {
        width: 150,
        height: 50,
        marginLeft: '30%'
    },
    circulo: {
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: '#fff',
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        elevation: 5
    }


});