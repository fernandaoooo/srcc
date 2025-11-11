import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Animated, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Event from "../../components/VineCard"
import styles from "./styles";
import { use, useRef, useState } from 'react';
import TelaHome from '../../components/TelaHome';
import TelaDescricao from '../../components/TelaDescri';
import TelaCatalogo from '../../components/TelaCatalogo';
import TelaRotas from '../../components/TelaRotas';



export default function App() {
  const Tabs = createBottomTabNavigator();
  const [tela , setTela] = useState('Início')

  return (
    <NavigationContainer>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{tela}</Text>
      </View>
      <Tabs.Navigator id={undefined} screenOptions={{ headerShown: false }}>
        <Tabs.Screen 

         listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            navigation.navigate('Rotas');
            setTela('Início')
          },
        })} name="Home" component={TelaHome}
          options={{
            tabBarIcon: () => <Feather name="home" color={tela=='Início'?'white':'#6b1900'} size={30} />,
            tabBarActiveTintColor: 'white',
            tabBarActiveBackgroundColor:'#6b1900',
            tabBarInactiveTintColor:'black'
          }}
        />
        <Tabs.Screen listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            navigation.navigate('Rotas');
            setTela('Catalogo')
          },
        })}
         name="Catálogo" component={TelaCatalogo}
          options={{
            tabBarIcon: () =><FontAwesome5 name="wine-bottle" size={24} color={tela=='Catalogo'?'white':'#6b1900'}/>,
            tabBarActiveTintColor: 'white',
            tabBarActiveBackgroundColor:'#6b1900',
            tabBarInactiveTintColor:'#6b1900'
          }}
        />
        <Tabs.Screen listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            navigation.navigate('Rotas');
            setTela('Contato')
          },
        })}  name="Rotas" component={TelaRotas}
          options={{
            tabBarIcon: () => <FontAwesome5 name="book" size={30} color={tela=='Contato'?'white':'#6b1900'} />,
            tabBarActiveTintColor: 'white',
            tabBarActiveBackgroundColor:'#6b1900',
            tabBarInactiveTintColor:'#6b1900'
          }}
        />
        
      </Tabs.Navigator>
    </NavigationContainer>
  );
}




