import { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    // Button press animation
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 0.9,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();

    // Fade box animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      
      <Animated.View style={[styles.box, { opacity: fadeAnim }]} />

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Animate</Text>
        </Pressable>
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111", // dark UI 🔥
  },

  box: {
    width: 120,
    height: 120,
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});