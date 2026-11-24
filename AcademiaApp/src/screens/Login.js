import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.logo}>
        <Text style={styles.logoText}>EVOLVE</Text>
        <Text style={styles.subtitle}>SUA EVOLUÇÃO COMEÇA AQUI</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Entre na sua conta para continuar.</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#777"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Professor')}
        >
          <Text style={styles.buttonText}>ENTRAR COMO PROFESSOR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Aluno')}
        >
          <Text style={styles.secondaryButtonText}>ENTRAR COMO ALUNO</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>TREINE. EVOLUA. CONQUISTE.</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101114', justifyContent: 'center', padding: 25 },
  logo: { alignItems: 'center', marginBottom: 45 },
  logoText: { color: '#A5E65A', fontSize: 38, fontWeight: '900', letterSpacing: 4 },
  subtitle: { color: '#92969E', fontSize: 11, letterSpacing: 3, marginTop: 8 },
  form: { width: '100%' },
  title: { color: '#FFF', fontSize: 29, fontWeight: 'bold' },
  description: { color: '#92969E', marginTop: 8, marginBottom: 25 },
  label: { color: '#FFF', marginBottom: 8, fontWeight: '600' },
  input: {
    backgroundColor: '#1C1F24',
    color: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#30343B',
  },
  button: {
    backgroundColor: '#A5E65A',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#101114', fontWeight: '900', fontSize: 14 },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#A5E65A',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  secondaryButtonText: { color: '#A5E65A', fontWeight: 'bold', fontSize: 14 },
  footer: { color: '#777', textAlign: 'center', marginTop: 30, letterSpacing: 2, fontSize: 10 },
});