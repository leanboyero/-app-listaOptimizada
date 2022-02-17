import {Button, StyleSheet, Text} from 'react-native';

import React from 'react';

const ItemList = props => {
  const {itemText, onModalHandle} = props;
  return (
    <Text style={styles.textList}>
      {itemText}
      <Button
        style={styles.buttonOpen}
        color="#FF2D00"
        title="Eliminar"
        onPress={onModalHandle}
      />
    </Text>
  );
};
const styles = StyleSheet.create({
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
});

export default ItemList;
