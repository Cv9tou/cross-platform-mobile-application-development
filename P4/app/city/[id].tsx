import { StyleSheet, Text, View } from 'react-native'

import { useLocalSearchParams } from 'expo-router'
import { MANY_CITIES } from '../../src/data/many-cities'
import { findCity } from '../../src/lib/cities'

// Екран міста — спадок P3, зелений: параметр читається рядком, місто
// знаходиться за id, невідомий id має свій стан. Сьогодні цей файл не
// змінюється: години прогнозу приїдуть сюди сіткою у P6.

export default function CityScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const city = findCity(MANY_CITIES, id)

  if (!city) {
    return (
      <View style={styles.screen}>
        <Text style={styles.name}>Місто не знайдено</Text>
        <Text style={styles.meta}>id {String(id)} немає у списку міст</Text>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.name}>{city.name}</Text>
      <Text style={styles.meta}>{city.country}</Text>
      <Text style={styles.temp}>{city.temperature}°C</Text>
      <Text style={styles.meta}>{city.condition}</Text>
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
  name: { fontSize: 30, fontWeight: '700' },
  temp: { fontSize: 24, fontWeight: '600', marginTop: 8 },
  meta: { fontSize: 15, color: '#6b7280', marginTop: 4 },
})
