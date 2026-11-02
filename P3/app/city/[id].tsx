import { Stack, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

import { MANY_CITIES } from '../../src/data/many-cities'
import { findCity } from '../../src/lib/cities'

export default function CityScreen() {
  const { id } = useLocalSearchParams()
  const city = findCity(MANY_CITIES, String(id))

  if (!city) {
    return (
      <View style={styles.screen}>
        <Stack.Screen options={{ title: 'Місто' }} />

        <Text style={styles.name}>Місто не знайдено</Text>
        <Text>id {String(id)} немає у списку міст</Text>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: city.name }} />

      <Text style={styles.name}>{city.name}</Text>
      <Text style={styles.text}>{city.country}</Text>
      <Text style={styles.temperature}>{city.temperature}°C</Text>
      <Text style={styles.text}>{city.condition}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
screen: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f4f6f8',
  padding: 24,
},
name: {
  fontSize: 30,
  fontWeight: '700',
},
meta: {
  fontSize: 15,
  color: '#6b7280',
  marginTop: 4,
},
temperature: {
  fontSize: 40,
  fontWeight: '700',
  marginTop: 16,
},
})