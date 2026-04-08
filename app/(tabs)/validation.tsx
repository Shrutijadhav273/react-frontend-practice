import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LearningScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setpass]=useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    // Validation
    if (name === "" || email === "") {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter valid email");
      return;
    }
    if (pass.length<6){
        setError("Password must be at least 6 characters");
        return;
    }

    setError("");
    alert("Form Submitted ✅");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Registration Form</Text>

      {/* Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      {/* password input*/}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#aaa"
        value={pass}
        onChangeText={setpass}
        secureTextEntry
      />


      {/* Error Message */}
      {error !== "" && <Text style={styles.error}>{error}</Text>}

      {/* Submit Button */}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>

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
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    color: "#bbb",
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  error: {
    color: "red",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#6200EE",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});