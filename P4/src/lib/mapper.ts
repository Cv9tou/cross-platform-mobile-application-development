import type { Forecast, WeatherResponse } from '../types'

export function iconUrl(icon: string): string {
  return `https:${icon}`
}

export function mapForecast(raw: WeatherResponse, id: string): Forecast {
  return {
    id,
    name: raw.location.name,
    country: raw.location.country,
    current: {
      temperature: raw.current.temp_c,
      condition: raw.current.condition.text,
      icon: iconUrl(raw.current.condition.icon),
      feelsLike: raw.current.feelslike_c,
      humidity: raw.current.humidity,
      windKph: raw.current.wind_kph,
    },
    hours: raw.forecast.forecastday.flatMap((day) =>
      day.hour.map((hour) => ({
        time: hour.time,
        temperature: hour.temp_c,
        condition: hour.condition.text,
        icon: iconUrl(hour.condition.icon),
      }))
    ),
  }
}