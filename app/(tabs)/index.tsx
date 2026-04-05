import { useRef } from "react";
import { Animated, Button, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]} />
      <Button title="Click Me" onPress={fadeIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  box: { width: 100, height: 100, backgroundColor: "blue", marginBottom: 20 },
});