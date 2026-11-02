import type { CityCoord } from '../types'

// ДАНО, готове — не змінюйте.
//
// Три міста стрічки. name і country тут — НАШІ назви, ті, що бачить
// користувач. У запит іде не вони, а координати: q=Dnipro WeatherAPI розуміє
// як Дніпрорудне (інше місто за сто кілометрів), а q=Dnipro,Ukraine — узагалі
// як Львів. Координати таких сюрпризів не роблять.
//
// MANY_CITIES у триста рядків координат не має — тому стрічка P4 працює з
// трьома. Це не крок назад: триста міст повернуться в P7 із локальної бази, а
// поки трьох достатньо, щоб побачити і кеш, і чотири стани.

export const CITY_COORDS: CityCoord[] = [
  {
    id: 'c-1',
    name: 'Dnipro',
    country: 'Ukraine',
    temperature: 24,
    condition: 'Partly cloudy',
    latitude: 48.4647,
    longitude: 35.0462,
  },
  {
    id: 'c-2',
    name: 'Reykjavík',
    country: 'Iceland',
    temperature: 9,
    condition: 'Light rain',
    latitude: 64.1466,
    longitude: -21.9426,
  },
  {
    id: 'c-3',
    name: 'Dubai',
    country: 'UAE',
    temperature: 38,
    condition: 'Clear sky',
    latitude: 25.2048,
    longitude: 55.2708,
  },
]
