import { StyleSheet, Text, View, Button, TextInput } from "react-native";

function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Course Goal" style={styles.textInput} />
        <Button title="Add Goal"></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 13,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
