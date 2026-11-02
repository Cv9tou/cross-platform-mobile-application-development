import type { WeatherResponse } from '../types'
import rawWeatherJson from './raw-weather.json'

// ДАНО, готове — не змінюйте.
//
// Це не вигадані дані й не реконструкція: raw-weather.json — справжня
// відповідь WeatherAPI для Дніпра, збережена одним curl-ом. Три дні по
// 24 години і кілька сотень полів, з яких застосунку потрібен десяток —
// решту WeatherResponse просто не описує. Файл однаковий в усіх заготовках
// курсу, і саме за його формою пишуться URL і мапер: дивитесь на живий
// JSON — і бачите, які поля шукати. Мертвий аудиторний Wi-Fi не вб'є пару —
// а живий запит ви зробите самі в TODO.

export const RAW_WEATHER = rawWeatherJson as unknown as WeatherResponse
