import {Text, StyleSheet} from 'react-native';   

function GoalItem() {
  return (
    <Text key={itemData.item} style={styles.textBox}>
      {itemData.item.text}
    </Text>
  );
}

const styles = StyleSheet.create({
  textBox: {
    borderRadius: 15,
    backgroundColor: "#28282B",
    color: "white",
    padding: 10,
    fontSize: 15,
    marginBottom: 4,
  },
});

export default GoalItem;
