import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Add" onPress={()=>{setCount(count+1)}}></Button>
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
    fontSize: 30
  }
});