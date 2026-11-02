import type { City } from '../types'

// Спадок P3, зелений: пошук міста за id і побудова шляху живуть тут з
// минулої пари. Екран міста ними користується і сьогодні — змінюються лише
// дані під ним: моки стають відповіддю API.

export function findCity(cities: City[], id: string): City | undefined {
  return cities.find((c) => c.id === id)
}

export function cityPath(id: string): string {
  return `/city/${id}`
}
