import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function DesarrolloScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#13131a" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.title}>Desarrollo de aplicaciones</Text>
          <View style={styles.divider} />
          
          {/* Contenedor de la información ordenada */}
          <View style={styles.infoContainer}>
            
            {/* Sección 1: Entorno de despliegue */}
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>📌 Entorno de despliegue</Text>
              <Text style={styles.sectionText}>
                Es un espacio configurado ya sea una base de datos, servidores o software donde se ejecuta la aplicación en una etapa de desarrollo (para probarla).
              </Text>
            </View>

            {/* Sección 2: Requisitos y Requerimientos */}
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>📋 Requisitos y requerimientos</Text>
              <Text style={styles.sectionText}>
                Necesidades, condiciones y características que debe cumplir la aplicación.
              </Text>
              <View style={styles.subBadgeContainer}>
                <View style={styles.badge}>
                  <Text style={styles.badgeTitle}>🔹 Requisitos:</Text>
                  <Text style={styles.badgeText}>Condición estricta que debe cumplir el entorno para que el desarrollo sea viable.</Text>
                </View>
                <View style={styles.badge}>
                  <Text style={styles.badgeTitle}>🔹 Requerimiento:</Text>
                  <Text style={styles.badgeText}>Lo que la app es capaz de hacer; condición o funcionalidad que se le pide al software que haga para el usuario.</Text>
                </View>
              </View>
            </View>

            {/* Sección 3: Arquitectura */}
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>🏗️ Arquitectura</Text>
              <Text style={styles.sectionText}>
                Es el plano o mapa que organiza cómo se dividen, organizan y comunican los componentes de un sistema para asegurar que funcione de manera eficiente.
              </Text>
            </View>

            {/* Sección 4: Construir */}
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>🛠️ Construir</Text>
              <Text style={styles.sectionText}>
                Es donde se empaqueta el código fuente para convertirlo en un archivo ejecutable y listo para instalar.
              </Text>
            </View>

            {/* Sección 5: Probar */}
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>🧪 Probar</Text>
              <Text style={styles.sectionText}>
                Donde se verifica que la app funcione como se planteó y no tenga errores.
              </Text>
            </View>

            {/* Sección 6: Desplegarlo */}
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>🚀 Desplegarlo</Text>
              <Text style={styles.sectionText}>
                Subir la aplicación al servidor de producción o publicarlo en tiendas para que el usuario final pueda usarlo y descargarlo.
              </Text>
            </View>

          </View>

          {/* Botón para regresar al menú principal */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.replace('/')}
          >
            <Text style={styles.buttonText}>Volver al Inicio</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ESTA ES LA SECCIÓN QUE FALTA EN TU ARCHIVO Y CAUSA TODOS LOS ERRORES
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#13131a', 
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1e1e2e',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 500, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#cdd6f4', 
    textAlign: 'center',
    marginBottom: 10,
  },
  divider: {
    width: '60%',
    height: 3,
    backgroundColor: '#89b4fa', 
    borderRadius: 2,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 20,
  },
  sectionBox: {
    backgroundColor: '#252538',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#313244',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#89b4fa',
    marginBottom: 6,
  },
  sectionText: {
    fontSize: 14,
    color: '#cdd6f4',
    lineHeight: 20,
  },
  subBadgeContainer: {
    marginTop: 10,
    gap: 8,
  },
  badge: {
    backgroundColor: '#1e1e2e',
    borderRadius: 8,
    padding: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#f5c2e7',
  },
  badgeTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#f5c2e7',
    marginBottom: 2,
  },
  badgeText: {
    fontSize: 13,
    color: '#a6adc8',
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#45475a', 
    height: 50, 
    width: '100%', 
    borderRadius: 10,
    justifyContent: 'center',   
    alignItems: 'center',       
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginTop: 10,
  },
  buttonText: {
    color: '#cdd6f4',           
    fontSize: 16,
    fontWeight: '600',          
  },
});