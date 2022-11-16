import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';

export function Login() {
  
  return (
    <View style={styles.container}>

    <Text style={styles.title}>
        Entrar na conta
    </Text>
      
    <Text style={styles.text}>
        Informe o seu e-mail e senha para acessar a sua conta.
    </Text>
      
      <View style={{ position: 'relative' }}>
        <Text style={styles.placeholder}>E-mail</Text>
        <TextInput
        onChangeText={(e) => { }}
        style={styles.input}
        />
      </View>

      <View style={{ position: 'relative' }}>
        <Text style={styles.placeholder}>Senha</Text>
        <TextInput
        onChangeText={(e) => { }}
          style={styles.input}
          secureTextEntry
        />
        <Ionicons style={styles.eye} name="eye" size={24} color="white" />
       
      </View>
      
      <TouchableOpacity>
      <Text style={styles.forgot}>
        Esqueci minha senha
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text >
          ENTRAR
        </Text>
      </TouchableOpacity>
         
      <TouchableOpacity>
        <Text style={styles.account}>
        CRIAR UMA CONTA
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}

