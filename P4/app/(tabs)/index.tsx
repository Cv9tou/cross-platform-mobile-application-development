import { useQuery } from '@tanstack/react-query'
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import { router } from 'expo-router'
import { keyOf } from '../../src/lib/row'
import { cityPath, findCity } from '../../src/lib/cities'
import { CITY_COORDS } from '../../src/data/coords'
import { fetchForecast } from '../../src/lib/api'
import type { Forecast } from '../../src/types'

export default function CitiesScreen() {
  const {
    data,
    isPending,
    isError,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ['forecasts'],
    queryFn: fetchForecast,
    retry: false,
    staleTime: 5 * 60 * 1000,
  })

  if (isPending) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (isError && data === undefined) {
    return (
      <View style={styles.center}>
        <Text>{error.message}</Text>

        <Pressable onPress={() => refetch()}>
          <Text>Спробувати ще</Text>
        </Pressable>
      </View>
    )
  }

  if (data !== undefined && data.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Немає міст</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={data ?? []}
      renderItem={({ item }) => <CityCard forecast={item} />}
      keyExtractor={keyOf}
      contentContainerStyle={styles.list}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching}
          onRefresh={() => refetch()}
        />
      }
    />
  )
}

function CityCard({ forecast }: { forecast: Forecast }) {
  const known = findCity(CITY_COORDS, forecast.id)

  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(cityPath(forecast.id))}
    >
      <View style={styles.left}>
        <Text style={styles.name}>{known?.name ?? forecast.name}</Text>
        <Text style={styles.meta}>{known?.country ?? forecast.country}</Text>
        <Text style={styles.found}>
          WeatherAPI знайшов: {forecast.name}
        </Text>
      </View>

      <View style={styles.right}>
        <Image
          style={styles.icon}
          source={{ uri: forecast.current.icon }}
        />
        <Text style={styles.temp}>
          {forecast.current.temperature}°C
        </Text>
        <Text style={styles.meta}>
          {forecast.current.condition}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  left: {
    flexShrink: 1,
    paddingRight: 12,
  },
  found: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 4,
  },
  icon: {
    width: 44,
    height: 44,
  },
})