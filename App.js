import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(currentCourseGoals) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText("");
  }

  return (
    <ImageBackground
      source={require("./assets/backgroundImage.jpg")}
      style={styles.imageStyle}
    >
      <View style={styles.appContainer}>
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
        <View style={styles.goalsContainer}>
          <Text style={styles.labelBox}>List of Goals</Text>
        </View>
        <View style={styles.textContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} />;
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    justifyContent: "center",
  },
  appContainer: {
    paddingTop: 50,
    flex: 1,
  },
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
  goalsContainer: {
    paddingBottom: 5,
  },
  labelBox: {
    backgroundColor: "#5C7829",
    padding: 14,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  textContainer: {
    flex: 6,
    paddingHorizontal: 8,
  },
});

export default App;
