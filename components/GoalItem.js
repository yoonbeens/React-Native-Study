import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native";

const GoalItem = (props) => {
  return (
    /*react-native는 스타일 상속의 개념이 없다*/
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: { color: "white" },
});
