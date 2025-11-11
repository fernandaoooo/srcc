import { Touchable, TouchableOpacity, View, Text, Image, } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

import styles from "./styles";
import { useState } from "react";


export default function VineCard({vinePhotoUrl, vineTitle, vineDescription}) {

  const images = {
    'vine1': require('../../../assets/vinho-branco.jpg'),
    'vine2': require('../../../assets/vinho-especial.jpg'),
    'vine3': require('../../../assets/vinho-rose.jpg'),
    'vine4': require('../../../assets/vinho-seco.jpg'),
    'vine5': require('../../../assets/vinho-tinto.jpg'),
  };
 
  const vinePhoto = images[vinePhotoUrl];

  return (
    <View style={styles.vineCardContainer}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={vinePhoto} ></Image>
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.textsTitle} >{vineTitle}</Text>
        <Text style={styles.textsDescription}>{vineDescription}</Text>
      </View>
      

      
    </View>
  );
}