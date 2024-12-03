import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Temperature()
{
    const [count, setCount] = useState(0);
    return(<View style={styles.container}>
      <Text style={[styles.text, {margin: 10}]}>目前溫度：{count}度</Text>
      <Button title="Refresh" onPress={()=>{setCount(count+1)}}></Button>
    </View>)
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