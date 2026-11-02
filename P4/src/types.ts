// Власна модель даних застосунку. City із P1–P3 не змінюється. P4 додає
// модель погоди: сиру відповідь WeatherAPI (її форма — нижче) і наш Forecast,
// яким живе екран. Сирі поля до компонентів не доходять — між ними стоїть
// мапер, і це головна ідея пари.

export type City = {
  /** Стабільна ідентичність: ним користуються ключ списку, id у базі і параметр маршруту. */
  id: string
  name: string
  country: string
  /** Поточна температура, °C — одна канонічна одиниця; форматування робить екран. */
  temperature: number
  /** Погода словами — так її пише і сам API. */
  condition: string
}

/** Сира відповідь WeatherAPI для одного міста — тільки ті поля, які читає
 *  застосунок. У справжній відповіді їх сотні: відкрийте
 *  src/data/raw-weather.json і подивіться, скільки приїжджає разом із цими. */
export type WeatherResponse = {
  /** Кого API знайшов за нашим q — не обов'язково те, що ми просили. */
  location: {
    name: string
    country: string
    localtime: string
    lat: number
    lon: number
  }
  current: {
    temp_c: number
    feelslike_c: number
    humidity: number
    wind_kph: number
    condition: { text: string; icon: string; code: number }
  }
  forecast: {
    /** Три дні окремими об'єктами; години кожного дня — усередині його hour. */
    forecastday: {
      date: string
      day: {
        maxtemp_c: number
        mintemp_c: number
        daily_chance_of_rain: number
        condition: { text: string; icon: string }
      }
      hour: { time: string; temp_c: number; condition: { text: string; icon: string } }[]
    }[]
  }
}

/** Місто з координатами — те, чим його показує мапа; API приймає і їх, і назву. */
export type CityCoord = City & { latitude: number; longitude: number }

/** Одна година прогнозу нашою мовою. icon — уже придатний для <Image>. */
export type Hour = { time: string; temperature: number; condition: string; icon: string }

/** Прогноз, яким живе стрічка: теперішнє + години трьох днів одним списком. */
export type Forecast = {
  id: string
  name: string
  country: string
  current: {
    temperature: number
    condition: string
    icon: string
    feelsLike: number
    humidity: number
    windKph: number
  }
  hours: Hour[]
}
