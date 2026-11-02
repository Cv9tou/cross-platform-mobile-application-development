import type { City } from '../types'

// Спадок P2–P3, зелений до кінця курсу. У P4 keyOf приймає будь-що з id —
// стрічка тепер показує прогнози, а не City, і ключ їй потрібен той самий.

/** Ключ рядка списку: id, не індекс — індекси ламають ключі при зміні даних. */
export function keyOf(item: { id: string }): string {
  return item.id
}

/** Текст картки одним рядком — формат зафіксований ще в P2, не міняйте його. */
export function rowOf(city: City): string {
  return `${city.name} · ${city.country} · ${city.temperature}°`
}
