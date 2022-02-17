import {FlatList, Text} from 'react-native';

import ItemList from './task';
import React from 'react';

const ListaItems = props => {
  const {idemList, onModalHandle} = props;
  return (
    <FlatList
      data={idemList}
      ListEmptyComponent={() => <Text>El listado está vacío</Text>}
      renderItem={({item}) => (
        <ItemList
          itemText={item.value}
          onModalHandle={onModalHandle.bind(this, item.id)}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ListaItems;
