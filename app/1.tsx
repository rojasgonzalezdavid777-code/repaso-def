import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function RepositoriosScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#13131a" />
      
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Repositorios de software</Text>
          <View style={styles.divider} />
          
          {/* Contenedor en blanco para meter el contenido de la clase 1 */}
          <View style={styles.vistaBlanca}>
            <Text style={styles.textBlanco}>Esta es tu nueva vista en blanco para la clase 1.</Text>
          </View>

          {/* Botón para regresar al menú principal */}
          <TouchableOpacity 
            style={[styles.button, { marginTop: 20, backgroundColor: '#45475a' }]} 
            onPress={() => router.replace('/')}
          >
            <Text style={styles.buttonText}>Volver al Inicio</Text>
          </TouchableOpacity>
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
  title: { fontSize: 24, fontWeight: 'bold', color: '#cdd6f4', textAlign: 'center', marginBottom: 10 },
  divider: { width: '60%', height: 3, backgroundColor: '#89b4fa', borderRadius: 2, marginBottom: 25 },
  vistaBlanca: {
    width: '100%', height: 150, backgroundColor: '#252538', borderRadius: 10,
    justifyContent: 'center', alignItems: 'center', borderStyle: 'dashed', borderWidth: 1, borderColor: '#585b70',
  },
  textBlanco: { color: '#a6adc8', fontSize: 14, textAlign: 'center' },
  button: {
    backgroundColor: '#313244', height: 52, width: '100%', borderRadius: 10,
    justifyContent: 'center', alignItems: 'center',
  },
  buttonText: { color: '#cdd6f4', fontSize: 16, fontWeight: '600' },
});