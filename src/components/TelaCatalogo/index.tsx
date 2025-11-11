import { Touchable, TouchableOpacity, View, Text, ScrollView, } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import VineCard from "../VineCard";

import styles from "./styles";
import { useState } from "react";


export default function TelaBiblioteca() {

  return (
    <View style={styles.container} >
            <Text>NOSSOS VINHOS</Text>
            <Text>Trabalhamos com o melhor vinho dos seguintes tipos: vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
    <ScrollView >
      

      <VineCard vineDescription={'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.'} vinePhotoUrl={'vine1'} vineTitle={'Chatingny Chardonnay'}></VineCard>

      <VineCard vineDescription={'Vinhos rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.'} vinePhotoUrl={'vine3'} vineTitle={'Concha y Toro Expotacion'}></VineCard>

      <VineCard vineDescription={'Vinho encorpado, saboroso e frutado, com final levemente adocicado.'} vinePhotoUrl={'vine3'} vineTitle={"Portada Winemaker's"}></VineCard>
      <VineCard vineDescription={'Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados'} vinePhotoUrl={'vine3'} vineTitle={"Elvio Cogno Ravera Barolo"}></VineCard>
    </ScrollView>
    </View>
  );
}