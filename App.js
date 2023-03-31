import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Home from "./src/screens/Home";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingLeft: 30,
    // paddingRight: 30,
    // flex: 1,
    height: "100%",
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
