import { Text, View, TouchableOpacity, Image, ImageComponent } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";

import Logo from "./assets/img/logo2.png";

export default function App() {
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
      </View>
  );
}
