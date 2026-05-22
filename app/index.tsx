import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#13131a" />
      
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Elementos de clase</Text>
          <View style={styles.divider} />
          
          <View style={styles.buttonContainer}>
            {/* Botón 1 */}
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => router.push('/1')}
            >
              <Text style={styles.buttonText}>1. Repositorios de software</Text>
            </TouchableOpacity>

            {/* Botón 2 */}
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => router.push('/2')}
            >
              <Text style={styles.buttonText}>2. Programación básica</Text>
            </TouchableOpacity>

            {/* Botón 3 */}
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => router.push('/3')}
            >
              <Text style={styles.buttonText}>3. Pensamiento computacional</Text>
            </TouchableOpacity>

            {/* Botón 4 */}
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => router.push('/4')}
            >
              <Text style={styles.buttonText}>4. Desarrollo de aplicaciones</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>
            Este diseño es responsivo y se adapta a celulares y computadores.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#13131a' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  card: {
    backgroundColor: '#1e1e2e',
    borderRadius: 16,
    padding: 30,
    width: '100%',
    maxWidth: 500, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#cdd6f4', textAlign: 'center', marginBottom: 10 },
  divider: { width: '60%', height: 3, backgroundColor: '#89b4fa', borderRadius: 2, marginBottom: 25 },
  buttonContainer: { flexDirection: 'column', marginBottom: 10, width: '100%', paddingHorizontal: 10 },
  button: {
    backgroundColor: '#313244', 
    height: 52, width: '100%', borderRadius: 10, borderWidth: 1, borderColor: '#45475a',
    justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, marginBottom: 14,
  },
  buttonText: { color: '#cdd6f4', fontSize: 16, fontWeight: '600', textAlign: 'center' },
  subtitle: { fontSize: 15, color: '#a6adc8', textAlign: 'center', lineHeight: 22 },
});