import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Task from '../components/Task'
import Button from '../components/Button'

const TaskIndex = ({navigation}) => {
    const taskItems
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas</Text>
        <View style={styles.items}>
          <Task title={'Task '} description={'teste'} date={'01/01/2023'}/>
          <Task title={'Task 2'} description={'teste'} date={'01/01/2023'}/>
        </View>
        <Button title="Adicionar nova tarefa" onPress={() => navigation.navigate('CreateTask')}/>   
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