import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { saveEvent } from '../utils/storage';

export default function LocalizacaoScreen({ navigation }) {
  const [local, setLocal] = useState('');

  const handleNext = async () => {
    await saveEvent({ local, tempo: '', prejuizos: '', recomendacoes: [] });
    navigation.navigate('Tempo');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o local afetado"
        value={local}
        onChangeText={setLocal}
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
