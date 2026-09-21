import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { MOCK_CITIES } from './src/data/mocks'

export default function App() {
  const [cityIndex, setCityIndex] = useState(0)
  const city = MOCK_CITIES[cityIndex]

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />

      <Text style={styles.title}>Weather</Text>

      <View style={styles.card}>
        <Text style={styles.cityName}>{city.name}</Text>
        <Text style={styles.country}>{city.country}</Text>
        <Text style={styles.temperature}>{city.temperature}°C</Text>
        <Text style={styles.condition}>{city.condition}</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => setCityIndex((cityIndex + 1) % MOCK_CITIES.length)}
      >
        <Text style={styles.buttonText}>Next city</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#111827',
    paddingTop: 72,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 24,
  },

  card: {
    backgroundColor: '#2563eb',
    padding: 24,
    borderRadius: 24,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },

  cityName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },

  country: {
    fontSize: 16,
    color: '#dbeafe',
    marginBottom: 28,
  },

  temperature: {
    fontSize: 48,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },

  condition: {
    fontSize: 18,
    color: '#eff6ff',
  },

  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
  },

  buttonText: {
    color: '#2563eb',
    fontSize: 17,
    fontWeight: '700',
  },
})