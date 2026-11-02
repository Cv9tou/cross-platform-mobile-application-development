import { CITY_COORDS } from '../data/coords'
import { RAW_WEATHER } from '../data/fixtures'
import { DEMO_STATE, USE_MOCKS } from './config'
import { mapForecast } from './mapper'
import { buildForecastUrl, coordsQuery } from './urls'
import type { CityCoord, Forecast, WeatherResponse } from '../types'

export async function fetchWeather(q: string): Promise<WeatherResponse> {
  const response = await fetch(buildForecastUrl(q))

  if (!response.ok) {
    const body = await response.json() as {
      error?: {
        message?: string
      }
    }

    throw new Error(body.error?.message ?? `HTTP ${response.status}`)
  }

  return await response.json() as WeatherResponse
}

async function fetchOne(city: CityCoord): Promise<Forecast> {
  const raw = await fetchWeather(coordsQuery(city))
  return mapForecast(raw, city.id)
}

export async function fetchForecast(): Promise<Forecast[]> {
  if (USE_MOCKS || DEMO_STATE !== 'normal') await delay(1500)

  if (DEMO_STATE === 'empty') return []

  if (DEMO_STATE === 'error') {
    throw new Error('Навчальна помилка: не вдалося завантажити погоду.')
  }

  if (USE_MOCKS) return CITY_COORDS.map(mockForecastFor)

  return Promise.all(CITY_COORDS.map(fetchOne))
}

function mockForecastFor(city: CityCoord): Forecast {
  const shift = city.id === 'c-2' ? -15 : city.id === 'c-3' ? 14 : 0

  const raw: WeatherResponse = {
    ...RAW_WEATHER,
    current: {
      ...RAW_WEATHER.current,
      temp_c: shifted(RAW_WEATHER.current.temp_c, shift),
      feelslike_c: shifted(RAW_WEATHER.current.feelslike_c, shift),
    },
    forecast: {
      forecastday: RAW_WEATHER.forecast.forecastday.map((day) => ({
        ...day,
        hour: day.hour.map((hour) => ({
          ...hour,
          temp_c: shifted(hour.temp_c, shift),
        })),
      })),
    },
  }

  return mapForecast(raw, city.id)
}

function shifted(temperature: number, shift: number): number {
  return Math.round((temperature + shift) * 10) / 10
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}