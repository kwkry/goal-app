import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import GoalInput from "./components/GoalInput";
import GoalItemList from "./components/GoalListItems";

function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [initialRender, setInitialRender] = useState(true);

  // useEffect(() => {
  //   if (initialRender) {
  //     const initialGoals = Array.from({ length: 1000 }, (_, index) => ({
  //       text: `Goal ${index + 1}`,
  //       key: Math.random().toString(),
  //     }));

  //     setCourseGoals(initialGoals);
  //     setInitialRender(false);
  //   }
  // }, [initialRender]);

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
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <Text style={styles.labelBox}>List of Goals</Text>
        </View>
        <View style={styles.textContainer}>
          <GoalItemList goalListData={courseGoals} />
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
    paddingBottom: 150,
  },
});

export default App;
