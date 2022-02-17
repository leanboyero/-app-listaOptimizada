import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

const ModalItem = props => {
  const {modalVisible, itemSelected, onDelete, onClose} = props;

  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Button title="x" onPress={onClose} style={styles.buttonClose} />
          <Text>¿Está seguro que desea borrar?</Text>
          <View>
            <Text style={styles.modalMensaje}>{itemSelected.value}</Text>
          </View>
          <View style={{flexDirection: 'row-reverse', margin: 10}}>
            <TouchableOpacity
              style={{...styles.actions, backgroundColor: '#db2828'}}
              onPress={onClose}>
              <Text style={styles.actionText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.actions, backgroundColor: '#21ba45'}}
              onPress={onDelete}>
              <Text style={styles.actionText}>Si</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
export default ModalItem;
