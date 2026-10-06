// ДАНО — не змінюйте.
// Точка входу, названа в "main" у package.json. Вона передає App.tsx нативному хосту,
// саме тому App.tsx — єдина точка входу, яку ви чіпаете. P3 замінить цей файл на точку
// входу, яку приносить роутер; сьогодні роутера ще немає.
import { registerRootComponent } from 'expo'

import App from './App'

registerRootComponent(App)
