import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Aluno({ navigation }) {
  const [concluidos, setConcluidos] = useState({});

  const treinoHoje = [
    { id: '1', nome: 'Agachamento Livre', info: '4 séries x 10 reps • 60kg' },
    { id: '2', nome: 'Leg Press 45°', info: '4 séries x 12 reps • 140kg' },
    { id: '3', nome: 'Cadeira Extensora', info: '3 séries x 15 reps • 45kg' },
    { id: '4', nome: 'Panturrilha em Pé', info: '4 séries x 15 reps • 50kg' },
  ];

  const toggleCheck = (id) => {
    setConcluidos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Bora treinar, Carlos!</Text>
      <Text style={styles.subtitle}>Treino B — Membros Inferiores</Text>

      {treinoHoje.map((item) => {
        const feito = !!concluidos[item.id];
        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, feito && styles.cardDone]}
            onPress={() => toggleCheck(item.id)}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.exName, feito && styles.textDone]}>{item.nome}</Text>
              <Text style={styles.exInfo}>{item.info}</Text>
            </View>
            <Ionicons
              name={feito ? 'checkmark-circle' : 'ellipse-outline'}
              size={28}
              color={feito ? '#A5E65A' : '#92969E'}
            />
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={styles.evoButton}
        onPress={() => navigation.navigate('Evolucao')}
      >
        <Text style={styles.evoButtonText}>VER MINHA EVOLUÇÃO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101114', padding: 20 },
  welcome: { color: '#FFF', fontSize: 25, fontWeight: 'bold' },
  subtitle: { color: '#A5E65A', fontSize: 15, fontWeight: '600', marginBottom: 20, marginTop: 4 },
  card: {
    backgroundColor: '#1C1F24',
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDone: { borderColor: '#A5E65A', borderWidth: 1, opacity: 0.85 },
  exName: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  textDone: { textDecorationLine: 'line-through', color: '#92969E' },
  exInfo: { color: '#92969E', fontSize: 13, marginTop: 4 },
  evoButton: {
    backgroundColor: '#A5E65A',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 18,
  },
  evoButtonText: { color: '#101114', fontWeight: '900', fontSize: 14 },
});