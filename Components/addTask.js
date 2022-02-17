import {Button, StyleSheet, TextInput, View} from 'react-native';

import React from 'react';

const AddItem = props => {
  const {onChange, value, onAddItem, disabled} = props;
  return (
    <View style={styles.view}>
      <TextInput
        autoFocus
        placeholder="Nombra una tarea"
        style={styles.textinput}
        onChangeText={onChange}
        value={value}
      />
      <Button
        title="Enviar"
        color="#2196F3"
        onPress={onAddItem}
        disabled={disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default AddItem;
