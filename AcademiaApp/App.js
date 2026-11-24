import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Professor from './src/screens/Professor';
import Alunos from './src/screens/Alunos';
import Treinos from './src/screens/Treinos';
import Evolucao from './src/screens/Evolucao';
import Aluno from './src/screens/Alunos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#101114' },
          headerTintColor: '#A5E65A',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#101114' },
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Professor" component={Professor} options={{ title: 'Painel do Professor' }} />
        <Stack.Screen name="Alunos" component={Alunos} options={{ title: 'Meus Alunos' }} />
        <Stack.Screen name="Treinos" component={Treinos} options={{ title: 'Montar Treino' }} />
        <Stack.Screen name="Evolucao" component={Evolucao} options={{ title: 'Evolução Física' }} />
        <Stack.Screen name="Aluno" component={Aluno} options={{ title: 'Área do Aluno' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}