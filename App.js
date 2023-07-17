import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [todoGoals, setTodoGoals] = useState([]);

  //버튼을 누르면 할 일 목록을 추가하는 함수
  const addGoalHandler = (enterdGoalText) => {
    //useState로 관리하는 상태 변수의 setter 안에 콜백 함수를 작성하면,
    //그 콜백 함수의 매개값은 항상 해당 상태 변수의 최신 값이 전달됩니다.
    setTodoGoals((currentTodoGoals) => [
      ...currentTodoGoals,
      { text: enterdGoalText, key: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setTodoGoals((currentTodoGoals) => {
      return currentTodoGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* ScrollView는 전체 화면이 렌더링 될 때 안의 항목들을 전부 렌더링 합니다 
            이로 인해 성능의 저하가 발생할 수 있습니다
            (보이지 않는 영역까지 렌더링을 진행하기 때문에 목록이 많다면 로딩이 길어짐)
            FlatList는 보이는 영역만 일단 렌더링을 진행하고, 나머지 항목들은
            스크롤 움직임이 발생하면 렌더링을 진행합니다 */}
        <FlatList
          data={todoGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            // console.log(item);
            // console.log(index);
            return item.id;
          }}
          alwaysBounceVertical={true}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});
