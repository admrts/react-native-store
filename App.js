import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import storeData from "./src/data.json";
import Card from "./src/components/Card";
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.patika_title}> PATIKASTORE </Text>
        <TextInput
          style={styles.text_input}
          placeholder="Search..."
          placeholderTextColor={"black"}
        ></TextInput>
      </View>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={storeData}
        renderItem={({ item }) => <Card data={item} />}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  patika_title: {
    marginTop: 10,
    color: "maroon",
    fontSize: 35,
    fontWeight: "bold",
  },
  text_input: {
    height: Dimensions.get("window").height / 20,
    backgroundColor: "#e3e3e3",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
  },
});
