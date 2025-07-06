import { StyleSheet, Text, TouchableOpacity,View, TextInput } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="youremail"
        style={{ borderWidth: 1, padding: 20 }}
        secureTextEntry={false}
      />

      <Text style={styles.text}>React Native Expo</Text>
      <Image
        source={require("@/assets/images/favicon.png")}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <TouchableOpacity>
        <Text>Click me</Text>
      </TouchableOpacity>

{/* <Link href={"/about"}>Visit About Screen</Link> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "blue", fontSize: 40 },
});
