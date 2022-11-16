import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";

import Logo from "../../assets/img/logo2.png";

export function Home() {

  return (
    <View style={styles.container}>
      <View style={styles.buttonHeader}>
        <Image source={Logo} style={{ height: 70, width: 100 }} />

        <View style={styles.buttonContainer}>
          <Ionicons name="search-sharp" size={25} color="white" />

          <Ionicons name="ios-person-outline" size={25} color="white" />

          <TouchableOpacity style={styles.certificate}>
            <Text style={styles.textCertificate}>CERTIFICADOS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>

      <View style={styles.categoriaContainer} >
        <Text lineBreakMode="head" numberOfLines={2} style={styles.categoriaTitulo}>
            Intensivo de psicologia e psicanálise
        </Text>
        
        <Text style={styles.categoriaLink}>
            (10 cursos)
        </Text>
        
        <Text style={styles.categoriaLink}>
            ver todos
        </Text>
        </View>
        
      <ScrollView horizontal>
      </ScrollView>
      
      </View>

    </View>
  );
}