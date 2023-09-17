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
import GoalInput from "./components/GoalInput";

function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <ImageBackground
      source={require("./assets/backgroundImage.jpg")}
      style={styles.imageStyle}
    >
      <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoalHandler}/>
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
