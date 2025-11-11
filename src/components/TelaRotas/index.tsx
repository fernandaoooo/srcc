import { Touchable, TouchableOpacity, View, Text, } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import styles from "./styles";
import { useState } from "react";


export default function TelaRotas() {

  return (
    <View style={styles.container}>
      <Text style={styles.item} >Contato</Text>
      <View style={styles.item}>
        <Text style={styles.texto}>"Telefone"</Text>
        <Text style={styles.texto}>Telefone 2:</Text>
        <Text style={styles.texto}>+55 69 00000000</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.texto}>"Email"</Text>
        <Text style={styles.texto}>Email</Text>
        <Text style={styles.texto}>adegavinhos@gmail</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.texto}>"Endereço"</Text>
        <Text style={styles.texto}>Endereço</Text>
        <Text style={styles.texto}>Centro</Text>
      </View>

    </View>
  );
}