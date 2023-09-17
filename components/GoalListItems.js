import { FlatList } from "react-native";
import GoalItem from "./GoalItem";

const GoalItemList = ({ goalListData }) => {
  return (
    <FlatList
      data={goalListData}
      renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text} />;
      }}
      maxToRenderPerBatch={10}
      windowSize={21}
      updateCellsBatchingPeriod={5000}
      initialNumToRender={10}
      removeClippedSubviews={true}
    />
  );
};

export default GoalItemList;
