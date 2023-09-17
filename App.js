import { StyleSheet, Text, View, Button, TextInput } from "react-native";

function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Course Goal" style={styles.textInput} />
        <Button title="Add Goal"></Button>
      </View>
      <View>
        <Text>List of Goals:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 3,
  },
});

export default App;
