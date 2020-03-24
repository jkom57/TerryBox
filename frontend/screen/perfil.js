import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default class About extends Component{
  render(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
              <View style={styles.perfil}>
                <Text style={styles.info}>Nombre de Usuario: </Text>
                <Text>Usuario</Text>
              </View>
              <View style={styles.perfil}>
                <Text style={styles.info}>Correo: </Text>
                <Text>Correo</Text>
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
    profile:{
      borderWidth: 1,
      alignItems: 'center',
      marginTop: 50,
      marginHorizontal: 50,
    },
    perfil:{
      flexDirection: 'row',
      marginVertical: 10
    },
    info:{
      fontWeight: 'bold',
      fontSize: 16
    }
});