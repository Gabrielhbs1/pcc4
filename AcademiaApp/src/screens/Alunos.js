import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Alunos({ navigation }) {
  const [nome, setNome] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [lista, setLista] = useState([
    { id: '1', nome: 'Carlos Silva', objetivo: 'Hipertrofia' },
    { id: '2', nome: 'Mariana Souza', objetivo: 'Emagrecimento' },
    { id: '3', nome: 'Pedro Santos', objetivo: 'Condicionamento' },
  ]);

  const adicionarAluno = () => {
    if (!nome.trim()) return;
    setLista([
      { id: Date.now().toString(), nome, objetivo: objetivo || 'Geral' },
      ...lista,
    ]);
    setNome('');
    setObjetivo('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formCard}>
        <Text style={styles.cardTitle}>Novo Aluno</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do aluno"
          placeholderTextColor="#777"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Objetivo (ex: Hipertrofia)"
          placeholderTextColor="#777"
          value={objetivo}
          onChangeText={setObjetivo}
        />
        <TouchableOpacity style={styles.button} onPress={adicionarAluno}>
          <Text style={styles.buttonText}>+ CADASTRAR ALUNO</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listTitle}>Alunos Cadastrados ({lista.length})</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.studentCard}
            onPress={() => navigation.navigate('Treinos')}
          >
            <View>
              <Text style={styles.studentName}>{item.nome}</Text>
              <Text style={styles.studentGoal}>Objetivo: {item.objetivo}</Text>
            </View>
            <Ionicons name="barbell-outline" size={24} color="#A5E65A" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101114', padding: 20 },
  formCard: { backgroundColor: '#1C1F24', padding: 16, borderRadius: 14, marginBottom: 20 },
  cardTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  input: {
    backgroundColor: '#101114',
    color: '#FFF',
    padding: 13,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#30343B',
  },
  button: { backgroundColor: '#A5E65A', padding: 14, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#101114', fontWeight: '900', fontSize: 13 },
  listTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  studentCard: {
    backgroundColor: '#1C1F24',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentName: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  studentGoal: { color: '#92969E', fontSize: 13, marginTop: 3 },
});