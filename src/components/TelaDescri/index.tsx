import { Touchable, TouchableOpacity, View, Text, } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

import styles from "./styles";
import { useState } from "react";


export default function TelaDescricao() {

  return (
    <View style={styles.container}>
      <Text>Descrições a seguir:</Text>
      <Text>Descrição dos vinhos: branco, rosé, tinto e seco.</Text>
    </View>
  );
}