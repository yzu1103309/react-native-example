import { View, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link style={[styles.text, {textDecorationLine: 'underline'}]} href={'/temperature'}>View Temperature</Link>
      <Link style={[styles.text, {textDecorationLine: 'underline', marginTop: 20}]} href={'/moisture'}>View Moisture</Link>
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
  }
});