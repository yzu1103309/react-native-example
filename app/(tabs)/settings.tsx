import { View, StyleSheet, Text } from "react-native";
import { router } from "expo-router";
import { Button } from "react-native-ios-kit";

export default function SettingsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    fontSize: 20
  },
  btn: {
    width: '80%',
    marginVertical: 20
  }
});