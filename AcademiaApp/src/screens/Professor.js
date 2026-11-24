import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Professor({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Olá, Treinador!</Text>
      <Text style={styles.sub}>Resumo da sua academia hoje</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>48</Text>
          <Text style={styles.statLabel}>Alunos Ativos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Treinos Novos</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Acesso Rápido</Text>

      <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('Alunos')}>
        <Ionicons name="people" size={28} color="#A5E65A" />
        <View style={styles.menuInfo}>
          <Text style={styles.menuTitle}>Gerenciar Alunos</Text>
          <Text style={styles.menuDesc}>Cadastrar e visualizar lista de alunos</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#92969E" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('Treinos')}>
        <Ionicons name="barbell" size={28} color="#A5E65A" />
        <View style={styles.menuInfo}>
          <Text style={styles.menuTitle}>Montar Treinos</Text>
          <Text style={styles.menuDesc}>Criar fichas A, B e C personalizadas</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#92969E" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('Evolucao')}>
        <Ionicons name="trending-up" size={28} color="#A5E65A" />
        <View style={styles.menuInfo}>
          <Text style={styles.menuTitle}>Avaliação e Evolução</Text>
          <Text style={styles.menuDesc}>Acompanhar peso, medidas e cargas</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#92969E" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101114', padding: 20 },
  greeting: { color: '#FFF', fontSize: 26, fontWeight: 'bold' },
  sub: { color: '#92969E', fontSize: 14, marginBottom: 22 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28 },
  statCard: {
    backgroundColor: '#1C1F24',
    width: '48%',
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2B2F36',
  },
  statNumber: { color: '#A5E65A', fontSize: 32, fontWeight: '900' },
  statLabel: { color: '#92969E', marginTop: 4, fontSize: 13 },
  sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 14 },
  menuCard: {
    backgroundColor: '#1C1F24',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },
  menuInfo: { flex: 1, marginLeft: 15 },
  menuTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  menuDesc: { color: '#92969E', fontSize: 12, marginTop: 3 },
});