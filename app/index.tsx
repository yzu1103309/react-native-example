import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  let count = 0
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Add" onPress={()=>{count+=1; console.log(count)}}></Button>
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