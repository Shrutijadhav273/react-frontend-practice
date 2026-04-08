import { StyleSheet, Text, View } from "react-native";

export default function LearningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning UI Design</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>• Flexbox Layout</Text>
        <Text style={styles.cardText}>• Colors & Themes</Text>
        <Text style={styles.cardText}>• Buttons & Inputs</Text>
        <Text style={styles.cardText}>• Responsive Design</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 15,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
});