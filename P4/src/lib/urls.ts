export const WEATHERAPI_KEY = 'ddfb0c0d623f4b5aadb192437261009'

export function coordsQuery(c: { latitude: number; longitude: number }): string {
  return `${c.latitude},${c.longitude}`
}

export function buildForecastUrl(q: string): string {
  const params = new URLSearchParams({
    key: WEATHERAPI_KEY,
    q: q,
    days: '3',
  })

  return `https://api.weatherapi.com/v1/forecast.json?${params.toString()}`
}