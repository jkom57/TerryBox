import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import axios from 'axios';

export default class About extends Component{
  state = {
    users: []
  }
  
  async componentDidMount() {
    const res = await axios.get('https://terrybox.herokuapp.com/api')
    this.setState({users: res.data})
  }

  render(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
              <View style={styles.perfil}>
                <Text style={styles.info}>Nombre de Usuario: </Text>
                {
                  this.state.users.map(user=> <Text key={user._id}>
                    {
                      user.name
                    }
                  </Text>)
                }
              </View>
              <View style={styles.perfil}>
                <Text style={styles.info}>Correo: </Text>
                {
                  this.state.users.map(user=> <Text key={user._id}>
                    {
                      user.email
                    }
                  </Text>)
                }
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