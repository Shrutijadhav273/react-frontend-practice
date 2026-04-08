import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function learning() {

      const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    waveHand();
  }, []);

  const waveHand = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: -1,
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-30deg", "30deg"],
  });
    return (
        
        <View style={styles.container}>
             <Text style={styles.title}>Learning React Native</Text>
             <Animated.Text style={[styles.hand, { transform: [{ rotate }] }]}>
        👋
      </Animated.Text>

      <Text style={styles.text}>Hello!</Text>
        

        <Pressable
        style={styles.button}
        onPress={() => router.push("/validation")}
      >
        <Text style={styles.buttonText}>Go to form validation</Text>
      </Pressable>
                </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        fontSize:22,
        color:"pink",
        fontWeight: "bold",
    },
    button:{
        backgroundColor: "#6200EE",
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    buttonText:{
        color: "#fff",
        fontWeight: "bold",
    },
      hand: {
    fontSize: 80,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    marginTop: 10,
  }
});
