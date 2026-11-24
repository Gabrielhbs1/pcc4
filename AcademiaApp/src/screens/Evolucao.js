import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Evolucao() {
  const historico = [
    { mes: 'Setembro', peso: '84.0 kg', bf: '18.5%' },
    { mes: 'Outubro', peso: '81.5 kg', bf: '16.8%' },
    { mes: 'Novembro', peso: '79.2 kg', bf: '15.0%' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Progresso Geral</Text>

      <View style={styles.highlightCard}>
        <Text style={styles.highlightLabel}>PERDA DE GORDURA</Text>
        <Text style={styles.highlightValue}>-3.5% BF</Text>
        <Text style={styles.highlightSub}>Últimos 90 dias</Text>
      </View>

      <Text style={styles.section}>Histórico de Avaliações</Text>

      {historico.map((item, idx) => (
        <View key={idx} style={styles.rowCard}>
          <Text style={styles.month}>{item.mes}</Text>
          <View style={styles.metrics}>
            <Text style={styles.metricText}>Peso: {item.peso}</Text>
            <Text style={styles.metricHighlight}>Gordura: {item.bf}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101114', padding: 20 },
  title: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  highlightCard: {
    backgroundColor: '#1C1F24',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A5E65A',
    marginBottom: 24,
  },
  highlightLabel: { color: '#92969E', fontSize: 12, letterSpacing: 2 },
  highlightValue: { color: '#A5E65A', fontSize: 38, fontWeight: '900', marginVertical: 6 },
  highlightSub: { color: '#FFF', fontSize: 13 },
  section: { color: '#FFF', fontSize: 17, fontWeight: 'bold', marginBottom: 12 },
  rowCard: {
    backgroundColor: '#1C1F24',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  month: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  metrics: { alignItems: 'flex-end' },
  metricText: { color: '#92969E', fontSize: 13 },
  metricHighlight: { color: '#A5E65A', fontWeight: 'bold', marginTop: 2 },
});