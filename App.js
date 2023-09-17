import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";
import { useState } from "react";

function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(currentCourseGoals) {
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText]);
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
          {courseGoals.map((goal, index) => (
            <Text key={index} style={styles.textBox}>
              {goal}
            </Text>
          ))}
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
  textBox: {
    borderRadius: 15,
    backgroundColor: "#28282B",
    color: "white",
    padding: 10,
    fontSize: 15,
    marginBottom: 4,
  },
});

export default App;
