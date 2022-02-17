/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {Text, View} from 'react-native';

import AddItem from './Components/addTask';
import ListaItems from './Components/Lista/index';
import ModalItem from './Components/modal';
import styles from './styles/styleApp';

const App = () => {
  // Uso de Hoooks const [variable, setup] = useState(valorInicial);
  // se suele utilizar un setter para darle valor un valor a la variable
  //Inicialización de hook con una variable de texto vació.
  const [task, setTask] = useState('');
  //Inicialización de hook con un arreglo o lista vacía.
  const [taskList, setTaskList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});

  //Equivalente a function onChange(text){}
  const onChange = text => {
    setTask(text);
  };
  const addTask = () => {
    setTaskList([...taskList, {id: Math.random().toString(), value: task}]);
    setTask('');
  };

  const modalHandle = id => {
    setTaskSelected(taskList.filter(item => item.id === id)[0]);
    setModalVisible(!modalVisible);
  };

  const deleteHandle = id => {
    setTaskList(taskList.filter(item => item.id !== id));
    setTaskSelected({});
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <AddItem
        onChange={text => onChange(text)}
        value={task}
        onAddItem={() => addTask()}
        disabled={task.trim().length === 0}
      />
      {taskList.length > 0 && (
        <View style={styles.taskListContainer}>
          <Text style={styles.taskListTitle}>Lista de tareas</Text>
          <ListaItems
            idemList={taskList}
            onModalHandle={id => modalHandle(id)}
          />
        </View>
      )}
      <ModalItem
        modalVisible={modalVisible}
        onDelete={deleteHandle.bind(this, taskSelected.id)}
        onClose={() => {
          setModalVisible(!modalVisible);
        }}
        itemSelected={taskSelected}
      />
    </View>
  );
};
export default App;
