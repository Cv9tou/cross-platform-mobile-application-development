import type { City } from '../types'

// ДАНО, готове — не змінюйте.
//
// Погодні дані написані руками, щоб мережа не була потрібна: уся практична
// працює з вимкненим Wi-Fi. Картка вгорі екрана читає саме цей файл; стрічка
// нижче читає src/data/many-cities.ts — триста міст тієї ж форми. Справжня
// відповідь API приїде в P4, форма даних не зміниться, тож екран теж.

export const MOCK_CITIES: City[] = [
  {
    id: 'c-1',
    name: 'Dnipro',
    country: 'Ukraine',
    temperature: 24,
    condition: 'Partly cloudy',
  },
  {
    id: 'c-2',
    name: 'Reykjavík',
    country: 'Iceland',
    temperature: 9,
    condition: 'Light rain',
  },
  {
    id: 'c-3',
    name: 'Dubai',
    country: 'UAE',
    temperature: 38,
    condition: 'Clear sky',
  },
]
