import React, {Component} from 'react'
import {Button, View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation'

export default class Login extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.h}>
                    <Text style={styles.text}>TerryBOX</Text>
                </View>
                <View style={styles.sesion}>
                    <Text style={styles.is}>Inicio de Sesión</Text>
                    <View style={styles.form}>
                        <Text style={styles.d}>Usuario:</Text>
                        <TextInput style={styles.dat} placeholder='Usuario' autoCapitalize='none' returnKeyType='next' ></TextInput>
                    </View>
                    <View style={styles.form}>
                    <Text style={styles.d}>Contraseña:</Text>
                    <TextInput style={styles.da} secureTextEntry={true} placeholder='Contraseña' returnKeyType='go'></TextInput>
                    </View>
                    <View style={styles.btn}>
                    <Button style={styles.btn} title="Iniciar Sesión" onPress={() => this.props.navigation.navigate("Inicio")} />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    h: {
      flex: 0,
      backgroundColor: 'rgb(7,89,212)',
      alignItems: 'flex-start',
      paddingTop: 15,
      paddingLeft: 5,
    },
    text:{
      color: 'black',
      margin: 10,
      fontSize: 30,
      textAlign: 'center',
    },
    btn:{
  
    },
    sesion:{
      borderWidth: 2,
      borderColor: 'rgb(7,89,212)',
      marginTop: 100,
      alignSelf: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    is:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      marginBottom: 20,
    },
    form:{
      flexDirection: 'row',
      
    },
    d:{
      marginLeft: 10,
      marginBottom: 25,
      fontWeight: 'bold',
    },
    da:{
      marginLeft: 20,
      paddingLeft: 5,
      height: 38,
      width: 170,
      borderColor: 'black',
      borderWidth: 1,
    },
    dat:{
      marginLeft: 47,
      paddingLeft: 5,
      height: 38,
      width: 170,
      borderColor: 'black',
      borderWidth: 1,
    },
  });