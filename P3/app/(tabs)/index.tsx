import { router } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import { MANY_CITIES } from '../../src/data/many-cities'
import { cityPath } from '../../src/lib/cities'
import { keyOf } from '../../src/lib/row'
import type { City } from '../../src/types'


function CityCard({ city }: { city: City }) {
  return (
    <Pressable
      style={styles.card}
     onPress={() => router.push('/city/aaa')}
    >
      <View>
        <Text style={styles.name}>{city.name}</Text>
        <Text style={styles.meta}>{city.country}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.temp}>{city.temperature}°C</Text>
        <Text style={styles.meta}>{city.condition}</Text>
      </View>
    </Pressable>
  )
}

function RowSeparator() {
  return <View style={styles.separator} />
}

export default function CitiesScreen() {
  return (
    <FlatList
      data={MANY_CITIES}
      renderItem={({ item }) => <CityCard city={item} />}
      keyExtractor={keyOf}
      ItemSeparatorComponent={RowSeparator}
      contentContainerStyle={styles.list}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
  },
  temp: {
    fontSize: 17,
    fontWeight: '700',
  },
  meta: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  right: {
    alignItems: 'flex-end',
  },
  separator: {
    height: 1,
    backgroundColor: '#E2E8F0',
  },
})