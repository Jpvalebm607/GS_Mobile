import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { getEvents } from '../utils/storage';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents();
      setEventos(data);
    };
    const unsubscribe = navigation.addListener('focus', fetchData);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="bolt" size={30} color="#fff" />
        <Text style={styles.title}>ApagouAqui?</Text>
      </View>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Localização')}>
        <Text style={styles.buttonText}>Cadastrar Novo Evento</Text>
      </Pressable>

      <FlatList
        data={eventos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>📍 Local: {item.local}</Text>
            <Text style={styles.itemText}>⏱ Tempo: {item.tempo}</Text>
            <Text style={styles.itemText}>💸 Prejuízos: {item.prejuizos}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginLeft: 10, color: '#333' },
  button: {
    backgroundColor: '#4E73DF',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2
  },
  itemText: { fontSize: 15, marginBottom: 4, color: '#333' }
});
