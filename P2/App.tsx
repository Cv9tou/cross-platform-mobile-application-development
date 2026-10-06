import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import { MANY_CITIES } from './src/data/many-cities'
import { MOCK_CITIES } from './src/data/mocks'
import { keyOf, rowOf } from './src/lib/row'
import type { City } from './src/types'


function CityCard({ city }: { city: City }) {
  return (
    <View style={styles.cityCard}>
      <Text style={styles.cityText}>{rowOf(city)}</Text>
    </View>
  )
}

function Separator() {
  return <View style={styles.separator} />
}


export default function App() {
  const [index, setIndex] = useState(0)
  const city = MOCK_CITIES[index]

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />

      <Text style={styles.title}>Weather</Text>

      <View style={styles.card}>
        <Text style={styles.cardName}>{city.name}</Text>
        <Text style={styles.cardLine}>{city.country}</Text>
        <Text style={styles.cardLine}>
          {city.temperature}°C · {city.condition}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => setIndex((index + 1) % MOCK_CITIES.length)}
        >
          <Text style={styles.buttonText}>Next city</Text>
        </Pressable>
      </View>

      <Text style={styles.feedTitle}>
        Cities · {MANY_CITIES.length}
      </Text>

      <FlatList
        style={styles.feed}
        data={MANY_CITIES}
        keyExtractor={keyOf}
        renderItem={({ item }) => <CityCard city={item} />}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.feedContent}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    paddingTop: 72,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 16,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },

  cardName: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },

  cardLine: {
    fontSize: 15,
    color: '#374151',
  },

  button: {
    marginTop: 12,
    backgroundColor: '#111827',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },

  feedTitle: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 4,
  },

  feed: {
    flex: 1,
  },

  feedContent: {
    paddingBottom: 24,
  },

  cityCard: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  cityText: {
    fontSize: 15,
    color: '#111827',
  },

  separator: {
    height: 1,
    backgroundColor: '#e2e8f0',
  },
})