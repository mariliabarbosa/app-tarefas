import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from '../components/Input'
import Button from '../components/Button'

const CreateTaskScreen = ({navigation, route}) => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const taskItems = route.params.taskItems;

    const createTask = () => {
        const task = {
            title: title,
            description: description,
            date: date
        }
        taskItems.push(task)
        taskItems.sort((a, b) => new Date(...a.date.split('/').reverse()) - new Date(...b.date.split('/').reverse()));
    }

    return (
        <View style={styles.container}>
            <View style={styles.createWrapper}>
                <Text style={styles.sectionTitle}>Criar tarefa</Text>
                <Input label="Nome" placeholder='Nome da tarefa' value={title} onChangeText={text => setTitle(text)}/>
                <Input label="Descrição" placeholder='Descrição' multiline={true} value={description} onChangeText={text => setDescription(text)}/>
                <Input label="Data de conclusão" placeholder='Data' value={date} onChangeText={text => setDate(text)}/>
                <Button title="Criar tarefa" onPress={() => {
                    createTask()
                    navigation.navigate('Index', {taskItems})
                }}/>
            </View>   
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  createWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  items: {
    marginTop: 30,
  },
});

export default CreateTaskScreen