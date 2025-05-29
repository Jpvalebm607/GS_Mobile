import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TempoScreen({ navigation }) {
  const [tempo, setTempo] = useState('');

  const handleNext = async () => {
    const data = await AsyncStorage.getItem('eventos');
    const eventos = JSON.parse(data);
    eventos[eventos.length - 1].tempo = tempo;
    await AsyncStorage.setItem('eventos', JSON.stringify(eventos));
    navigation.navigate('Prejuízos');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tempo de interrupção (ex: 3h)"
        value={tempo}
        onChangeText={setTempo}
      />
      <Pressable style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Avançar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f9f9f9' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16
  },
  button: {
    backgroundColor: '#4E73DF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
