import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});

export default styles;
