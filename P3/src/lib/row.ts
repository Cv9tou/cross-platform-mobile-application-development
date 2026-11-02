import type { City } from '../types'

// Спадок P2, готове — не змінюйте. Ключ і текст рядка винесені в чисті
// функції без стану й React: стрічка користується ними сьогодні, а далі —
// весь курс.

/** Ключ рядка списку: id міста, не індекс — індекси ламають ключі при зміні даних. */
export function keyOf(city: City): string {
  return city.id
}

/** Текст картки одним рядком — формат зафіксований ще в P2, не міняйте його. */
export function rowOf(city: City): string {
  return `${city.name} · ${city.country} · ${city.temperature}°`
}
