import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../pages/Login';
import TipoPessoa from '../pages/TipoPessoa';
import CNPJ from '../pages/CNPJ';
import CPF from '../pages/CPF';
import NomeCompleto from '../pages/NomeCompleto';
import DataNascimento from '../pages/DataNascimento';
import Email from '../pages/Email';
import Celular from '../pages/Celular';
import EnderecoSMS from '../pages/EnderecoSMS';
import SenhaApp from '../pages/SenhaApp';
import SenhaTransacao from '../pages/SenhaTransacao';
import Biometria from '../pages/Biometria';
import TipoDocumento from '../pages/TipoDocumento';
import fotoRGFrente from '../pages/fotoRGFrente';
import fotoRGVerso from '../pages/fotoRGVerso';
import fotoCNH from '../pages/fotoCNH';
import Selfie from '../pages/Selfie';
import conheceuTruckerPay from '../pages/conheceuTruckerPay';
import analiseConta from '../pages/analiseConta';


//HomePage App
import Home from '../pages_internas/Home';

//Funções Pagar
import FormaPagamento from '../pages_internas/Pagar/FormaPagamento'

//Extrato
import Extrato from '../pages_internas/Extrato/Extrato';

//Função Pagar Boletos
import CameraCodigoBarra from '../pages_internas/Pagar/Boletos/CameraCodigoBarra';
import CodigoBarra from '../pages_internas/Pagar/Boletos/CodigoBarra';
import Senha from '../pages_internas/Pagar/Boletos/Senha';
import pgtoSucesso from '../pages_internas/Pagar/Boletos/pgtoSucesso';
import comprovante from '../pages_internas/Pagar/Boletos/comprovante';


//Função Pagar QR-Code
import CameraQrCode from '../pages_internas/Pagar/QR Code/CameraQrCode';
import digiteValor from '../pages_internas/Pagar/QR Code/digiteValor';
import digiteCNPJ from '../pages_internas/Pagar/QR Code/digiteCNPJ';
import SenhaQrCode from '../pages_internas/Pagar/QR Code/SenhaQrCode';
import pgtoSucessoQrCode from '../pages_internas/Pagar/QR Code/pgtoSucessoQrCode';
import comprovanteQrCode from '../pages_internas/Pagar/QR Code/comprovanteQrCode';

//Esqueceu Minha Senha
import confirmarDados from '../pages/Esqueceu Senha/confirmarDados';
import codigoVerificacao from '../pages/Esqueceu Senha/codigoVerificacao';
import novaSenha from '../pages/Esqueceu Senha/novaSenha';

//Termos
import Termos from '../pages/Termos/TermoAbertura';



const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}  initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='TipoPessoa' component={TipoPessoa} />
        <Stack.Screen name='CNPJ' component={CNPJ} />
        <Stack.Screen name='CPF' component={CPF} />
        <Stack.Screen name='NomeCompleto' component={NomeCompleto} />
        <Stack.Screen name='DataNascimento' component={DataNascimento} />
        <Stack.Screen name='Email' component={Email} />
        <Stack.Screen name='Celular' component={Celular} />
        <Stack.Screen name='EnderecoSMS' component={EnderecoSMS} />
        <Stack.Screen name='SenhaApp' component={SenhaApp} />
        <Stack.Screen name='SenhaTransacao' component={SenhaTransacao} />
        <Stack.Screen name='Biometria' component={Biometria} />
        <Stack.Screen name='TipoDocumento' component={TipoDocumento} />
        <Stack.Screen name='fotoRGFrente' component={fotoRGFrente} />
        <Stack.Screen name='fotoRGVerso' component={fotoRGVerso} />
        <Stack.Screen name='fotoCNH' component={fotoCNH} />
        <Stack.Screen name='Selfie' component={Selfie} />
        <Stack.Screen name='conheceuTruckerPay' component={conheceuTruckerPay} />
        <Stack.Screen name='analiseConta' component={analiseConta} />


        <Stack.Screen name='Home' component={Home} />


        <Stack.Screen name='FormaPagamento' component={FormaPagamento} />


        <Stack.Screen name='Extrato' component={Extrato} />


        <Stack.Screen name='CameraCodigoBarra' component={CameraCodigoBarra} />
        <Stack.Screen name='CodigoBarra' component={CodigoBarra} />
        <Stack.Screen name='Senha' component={Senha} />
        <Stack.Screen name='pgtoSucesso' component={pgtoSucesso} />
        <Stack.Screen name='comprovante' component={comprovante} />
        

        <Stack.Screen name='CameraQrCode' component={CameraQrCode} />
        <Stack.Screen name='digiteValor' component={digiteValor} />
        <Stack.Screen name='digiteCNPJ' component={digiteCNPJ} />
        <Stack.Screen name='SenhaQrCode' component={SenhaQrCode} />
        <Stack.Screen name='pgtoSucessoQrCode' component={pgtoSucessoQrCode} />
        <Stack.Screen name='comprovanteQrCode' component={comprovanteQrCode} />



        <Stack.Screen name='confirmarDados' component={confirmarDados} />
        <Stack.Screen name='codigoVerificacao' component={codigoVerificacao} />
        <Stack.Screen name='novaSenha' component={novaSenha} />
        

        <Stack.Screen name='Termos' component={Termos} />



      
      </Stack.Navigator>
    </NavigationContainer>
  );
}