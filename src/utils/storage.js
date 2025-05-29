import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveEvent = async (event) => {
  try {
    const data = await AsyncStorage.getItem('eventos');
    const eventos = data ? JSON.parse(data) : [];
    eventos.push(event);
    await AsyncStorage.setItem('eventos', JSON.stringify(eventos));
  } catch (e) {
    console.error('Erro ao salvar evento:', e);
  }
};

export const getEvents = async () => {
  try {
    const data = await AsyncStorage.getItem('eventos');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Erro ao buscar eventos:', e);
    return [];
  }
};
