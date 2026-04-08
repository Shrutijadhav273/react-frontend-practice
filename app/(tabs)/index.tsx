import { router } from "expo-router";
import { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [isNight, setIsNight] = useState(false);

  const anim = useRef(new Animated.Value(0)).current;

  const toggleTheme = () => {
    Animated.timing(anim, {
      toValue: isNight ? 0 : 1,
      duration: 800,
      useNativeDriver: false,
    }).start();

    setIsNight(!isNight);
  };

  // Interpolations
  const skyColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#87CEEB", "#0B0F2F"],
  });

  const sunPosition = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  const moonPosition = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor: skyColor }]}>
      
      {/* Sun */}
      <Animated.View
        style={[
          styles.sun,
          { transform: [{ translateY: sunPosition }] },
        ]}
      />

      {/* Moon */}
      <Animated.View
        style={[
          styles.moon,
          { transform: [{ translateY: moonPosition }] },
        ]}
      />

      {/* Buttons Container */}
      <View style={styles.buttonContainer}>

        {/* Toggle Button */}
        <Pressable style={styles.button} onPress={toggleTheme}>
          <Text style={styles.buttonText}>
            {isNight ? "Switch to Day" : "Switch to Night"}
          </Text>
        </Pressable>

        {/* Navigation Button */}
        <Pressable
          style={styles.button}
          onPress={() => router.push("/(tabs)/learning")}
        >
          <Text style={styles.buttonText}>Go to Learning Page</Text>
        </Pressable>

      </View>

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  sun: {
    position: "absolute",
    top: 100,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFD700",
  },

  moon: {
    position: "absolute",
    top: 100,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFF",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
    gap: 15, // spacing between buttons
  },

  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});