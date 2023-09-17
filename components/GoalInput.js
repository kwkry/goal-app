import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(goalInputProp) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    goalInputProp.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Course Goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button
        title="Add Goal"
        onPress={addGoalHandler}
        color="#5C7829"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    flex: 1,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 13,
  },
});

export default GoalInput;
