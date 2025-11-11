import { Touchable, TouchableOpacity, View, Text, ImageBackground, } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import styles from "./styles";
import { useState } from "react";


export default function TelaHome() {

  return (
    <View style={styles.container}>
      <ImageBackground  style={styles.background} source={require('../../../assets/vine-Background.jpg')}>

      </ImageBackground>
    </View>
  );
}