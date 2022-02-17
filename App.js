import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';

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
      <View style={styles.view}>
        <TextInput
          autoFocus
          placeholder="Nombra una tarea"
          style={styles.textinput}
          onChangeText={text => onChange(text)}
          value={task}
        />
        <Button
          title="Enviar"
          color="#2196F3"
          onPress={() => addTask()}
          disabled={task.trim().length === 0}
        />
      </View>
      {taskList.length > 0 && (
        <View style={styles.taskListContainer}>
          <Text style={styles.taskListTitle}>Lista de tareas</Text>
          <FlatList
            data={taskList}
            ListEmptyComponent={() => <Text>El listado está vacío</Text>}
            renderItem={({item}) => (
              <Text style={styles.textList}>
                {item.value}
                <Button
                  style={styles.buttonOpen}
                  color="#FF2D00"
                  title="Eliminar"
                  onPress={id => modalHandle(item.id)}
                />
              </Text>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      )}
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button
              title="x"
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.buttonClose}
            />
            <Text>¿Está seguro que desea borrar?</Text>
            <View>
              <Text style={styles.modalMensaje}>{taskSelected.value}</Text>
            </View>
            <View style={{flexDirection: 'row-reverse', margin: 10}}>
              <TouchableOpacity
                style={{...styles.actions, backgroundColor: '#db2828'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.actionText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.actions, backgroundColor: '#21ba45'}}
                onPress={deleteHandle.bind(this, taskSelected.id)}>
                <Text style={styles.actionText}>Si</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textinput: {
    flex: 0.8,
    borderBottomWidth: 1,
    borderBottomColor: '#7A9AE3',
  },
  view: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
  },
  taskListContainer: {
    paddingHorizontal: 40,
    marginTop: 30,
  },
  taskListTitle: {
    fontSize: 15,
    color: '#000000',
  },
  textList: {
    backgroundColor: '#D6E3FF',
    padding: 10,
    marginVertical: 8,
  },
  buttonOpen: {
    backgroundColor: 'red',
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    fix: 1,
    marginTop: 40,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  actions: {
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  actionText: {
    color: '#fff',
  },
});
export default App;
