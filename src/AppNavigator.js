import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LocalizacaoScreen from './screens/LocalizacaoScreen';
import TempoScreen from './screens/TempoScreen';
import PrejuizosScreen from './screens/PrejuizosScreen';
import RecomendacoesScreen from './screens/RecomendacoesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Panorama">
        <Stack.Screen name="Panorama" component={HomeScreen} />
        <Stack.Screen name="Localização" component={LocalizacaoScreen} />
        <Stack.Screen name="Tempo" component={TempoScreen} />
        <Stack.Screen name="Prejuízos" component={PrejuizosScreen} />
        <Stack.Screen name="Recomendações" component={RecomendacoesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
