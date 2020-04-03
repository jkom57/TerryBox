import React, {Component} from 'react';
import {Button, View, Text, StyleSheet, ScrollView} from 'react-native';
import HTMLView from 'react-native-htmlview';
import RENDERHTML from 'react-native-render-html';
import { WebView } from 'react-native-webview';

var HTML = '<iframe data="https://asksensors.com/actuatorfs.html?s=4251&m=7676&uid=W0OashokGXvcq97CJrUgdFOvCBSQC0" width="400" height="300" type="text/html" />'
var HTML2 = '<iframe data="https://asksensors.com/graphfs.html?s=4250&m=7674&uid=8POPafmnh9EECjGzDO8AEUEWGSIUt7" width="400" height="300" type="text/html">algo</iframe>'
const HTML3 = '<object data="https://asksensors.com/graphfs.html?s=4250&m=7675&uid=DWvGeIAfKyJT33UIRUH3pmhiWz06y1" width="400" height="300" type="text/html">algo</object>'
const HTML4 = '<a href="https://asksensors.com/actuatorfs.html?s=4251&m=7676&uid=W0OashokGXvcq97CJrUgdFOvCBSQC0">Aiuda</a>'

//var lista = document.getElementById("lista");
//lista.insertAdjacentHTML("beforeend", "Elemento");

/*
 import { WebView } from 'react-native-webview';

class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: "<iFrame src='your_URL' ></WebView>" }}
      />
    );
  }
}
 

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
    );
  }
}
 */

export default class About extends Component{ 
  render(){
    return(
        //<ScrollView style={styles.container}>
        /*<View style={styles.modulos}>
        <View style={styles.modulos}>
            <Text style={styles.mod}>Módulo 1</Text>
            <Text style={styles.info}>Usuario: </Text>
            <Text style={styles.info}>Token: </Text>
            <Button color={'rgb(0,230,0)'} title="Status: Ok" style={styles.stat}/>
        </View>
        <View style={styles.modulos}>
            <Text style={styles.mod}>Módulo 2</Text>
            <Text style={styles.info}>Usuario: </Text>
            <Text style={styles.info}>Token: </Text>
            <Button color={'rgb(0,230,0)'} title="Status: Ok" style={styles.stat}/>
        </View>
        <HTMLView value={HTML}></HTMLView>
        <HTMLView value={HTML2}></HTMLView>
        <HTMLView value={HTML3}></HTMLView>
        <RENDERHTML html={HTML}></RENDERHTML>
        <RENDERHTML html={HTML4}></RENDERHTML>
        <WebView
          originWhitelist={['*']}
              source={{ html: "<h1>checando si funciona web view<h1>"}}
        />
      </View>
      */
            <WebView
                originWhitelist={['*']}
                source={{ html: '<iframe src="https://asksensors.com/actuatorfs.html?s=4251&m=7676&uid=W0OashokGXvcq97CJrUgdFOvCBSQC0" width="400" height="300" type="text/html" />' }}
            />
        //</ScrollView>
    )
  }
}
//bueno, hare un cambio temporal, no te asustes

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
    modulos:{
        borderWidth: 1,
        margin: 25,
    },
    mod:{
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 5,
    },
    info:{
        marginLeft: 5,
    },
    stat:{
        textDecorationColor: 'black',
    }
});