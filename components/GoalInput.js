import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  const [enterdGoalText, setEnterdGoalText] = useState("");

  //사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  const goalInputHandler = (enterdText) => {
    // console.log(enterdText);
    setEnterdGoalText(enterdText);
  };

  function addGoalHandler() {
    props.onAddGoal(enterdGoalText);
    setEnterdGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textinput}
        placeholder='할 일을 입력하세요!'
        onChangeText={goalInputHandler}
        value={enterdGoalText}
      />
      <Button title='할 일 추가하기' onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
