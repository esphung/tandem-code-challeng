import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightblue', // '#ecf0f1',
    padding: 8,
    paddingTop: 50,
  },
  text: {
    margin: 24,
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    margin: 24,
    width: '80%',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  // MultipleChoicePrompt
  multipleChoiceContainer: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'seagreen',
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    flex: 1,
    color: 'black',
  },
  icon: {
    marginHorizontal: 10,
  },
});
