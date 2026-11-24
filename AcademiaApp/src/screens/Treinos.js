import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function Treinos() {
  const [exercicio, setExercicio] = useState('');
  const [series, setSeries] = useState('');
  const [ficha, setFicha] = useState([
    { id: '1', nome: 'Supino Reto', series: '4x12' },
    { id: '2', nome: 'Crucifixo Inclinado', series: '3x15' },
    { id: '3', nome: 'Tríceps Pulley', series: '4x12' },
  ]);

  const adicionarExercicio = () => {
    if (!exercicio.trim()) return;
    setFicha([...ficha, { id: Date.now().toString(), nome: exercicio, series: series || '3x12' }]);
    setExercicio('');
    setSeries('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Treino A — Peito e Tríceps</Text>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 2, marginRight: 8 }]}
          placeholder="Exercício"
          placeholderTextColor="#777"
          value={exercicio}
          onChangeText={setExercicio}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Séries"
          placeholderTextColor="#777"
          value={series}
          onChangeText={setSeries}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={adicionarExercicio}>
        <Text style={styles.buttonText}>ADICIONAR EXERCÍCIO</Text>
      </TouchableOpacity>

      <FlatList
        style={{ marginTop: 20 }}
        data={ficha}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.exerciseCard}>
            <Text style={styles.index}>#{index + 1}</Text>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.badge}>{item.series}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101114', padding: 20 },
  header: { color: '#A5E65A', fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  row: { flexDirection: 'row' },
  input: {
    backgroundColor: '#1C1F24',
    color: '#FFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#30343B',
  },
  button: { backgroundColor: '#A5E65A', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#101114', fontWeight: '900', fontSize: 13 },
  exerciseCard: {
    backgroundColor: '#1C1F24',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  index: { color: '#A5E65A', fontWeight: 'bold', marginRight: 12 },
  name: { color: '#FFF', fontSize: 15, flex: 1, fontWeight: '600' },
  badge: {
    backgroundColor: '#101114',
    color: '#A5E65A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 12,
  },
});