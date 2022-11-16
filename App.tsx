import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import Logo from "./assets/img/logo2.png";
import { Ionicons } from "@expo/vector-icons";

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
