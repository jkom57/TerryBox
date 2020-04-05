import * as React from 'react';
import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registrarse from './screen/register';
import Sesion from './screen/login';
import Inicio from './screen/index';
import Modulos from './screen/modulos';
import Perfil from './screen/perfil';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Inicio" component={Inicio} 
        options={{
          title: 'TerryBox',
          headerStyle: {
            backgroundColor: 'rgb(7,89,212)',
          },
          headerTitleStyle: {
            fontSize: 30,
          },
          headerRight: () => (
            <Button
              onPress={() =>  alert('This is a button!')}
              title="Cerrar Sesión"
              color="rgb(200,0,0)"
            />
          ),
        }}
      />
      <MainStack.Screen name="Perfil" component={Perfil} 
        options={{
          title: 'TerryBox',
          headerStyle: {
            backgroundColor: 'rgb(7,89,212)',
          },
          headerTitleStyle: {
            fontSize: 30,
          },
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Cerrar Sesión"
              color="rgb(200,0,0)"
            />
          ),
        }}
      />
      <MainStack.Screen name="Modulos" component={Modulos} 
        options={{
          title: 'TerryBox',
          headerStyle: {
            backgroundColor: 'rgb(7,89,212)',
          },
          headerTitleStyle: {
            fontSize: 30,
          },
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Cerrar Sesión"
              color="rgb(200,0,0)"
            />
          ),
        }}
      />
    </MainStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none" initialRouteName='InicioDeSesion'>
        <RootStack.Screen name="Registro" component={Registrarse} />
        <RootStack.Screen name="InicioDeSesion" component={Sesion} />
        <RootStack.Screen name="Main" component={MainStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;