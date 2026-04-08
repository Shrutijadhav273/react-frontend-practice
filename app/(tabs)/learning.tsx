import { StyleSheet, Text, View ,Pressable,Button} from "react-native";
import { router } from "expo-router";
export default function learning() {
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Learning React Native</Text>
        

        <Pressable
                  style={styles.button}
                  onPress={() => router.push("/learning")}
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
    }
    button:{
        backgroundColor: "#6200EE",
        paddingVertical: 15,
        paddingHorizontal: 30,
    }
});
