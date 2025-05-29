import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function RecomendacoesScreen({ navigation }) {
  const dicas = [
    '🔌 Desligue os aparelhos eletrônicos.',
    '🥶 Evite abrir a geladeira com frequência.',
    '🔦 Tenha lanternas e pilhas por perto.'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendações</Text>
      {dicas.map((dica, index) => (
        <Text key={index} style={styles.item}>{dica}</Text>
      ))}
      <Pressable style={styles.button} onPress={() => navigation.navigate('Panorama')}>
        <Text style={styles.buttonText}>Voltar ao início</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  item: { fontSize: 16, marginVertical: 6 },
  button: {
    marginTop: 20,
    backgroundColor: '#4E73DF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
