import { StyleSheet, Text, View } from 'react-native'

// ДАНО — заглушка, не чіпайте. Карта приїде в P6; сьогодні Map існує, щоб
// у TODO(2) було що показати в третьому табі.
export default function MapScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Map</Text>
      <Text style={styles.hint}>Тут буде карта — у P6.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f6f8',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  hint: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 8,
  },
})
