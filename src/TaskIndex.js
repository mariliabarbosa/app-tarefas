import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Task from '../components/Task'
import Button from '../components/Button'

const TaskIndex = ({route, navigation}) => {
    const taskItems = (route.params.taskItems ? route.params.taskItems : []);
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas</Text>
        <View style={styles.items}>
          {
            (taskItems.length) ? 
              taskItems.map((item) => <Task title={item.title} description={item.description} date={item.date}/>)
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