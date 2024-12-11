import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Button } from "react-native-ios-kit";

export default function Index() {
  return (
    <View style={styles.container}>
      <Button style={styles.btn} rounded inverted onPress={()=>router.navigate('/temperature')}>View Temperature</Button>
      <Button style={styles.btn} rounded inverted onPress={()=>router.navigate('/moisture')}>View Moisture</Button>
      {/* <Link style={[styles.text, {textDecorationLine: 'underline'}]} href={'/temperature'}>View Temperature</Link>
      <Link style={[styles.text, {textDecorationLine: 'underline', marginTop: 20}]} href={'/moisture'}>View Moisture</Link> */}
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