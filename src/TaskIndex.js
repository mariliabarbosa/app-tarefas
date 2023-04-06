import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Task from '../components/Task'
import Button from '../components/Button'

const TaskIndex = ({route, navigation}) => {
  let [taskItems, setTaskItems] = useState([]);
  
  React.useEffect(() => {
    if(route.params){
      setTaskItems(route.params.taskItems)
    }
  }, [route.params])
  
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas</Text>
        <View style={styles.items}>
          {
            (taskItems.length) ? 
              taskItems.map((item, index) => {
                return(
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task title={item.title} description={item.description} date={item.date}/>
                  </TouchableOpacity>
                )
              })
              : null
          }
        </View>
        <Button title="Adicionar nova tarefa" onPress={() => navigation.navigate('CreateTask', {taskItems})}/>   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
});

export default TaskIndex