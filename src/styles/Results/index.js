import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'skyblue', // '#ecf0f1',
    padding: 8,
    paddingTop: 50,
  },
  text: {
    margin: 24,
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',

    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
  // ListView Styles
  listView: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    paddingTop: 50,
    paddingBottom: 50,
    // backgroundColor: '#ecf0f1',
  },
  item: {
    padding: 20,
    marginVertical: 18,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  listViewText: {
    // flex: 1,
    fontSize: 15,
  },
  listViewLeftText: {
    // color: 'gray',
  },
  listViewRightText: {
    textAlign: 'right',
    // color: 'gray',
    // opacity: 0.5,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    opacity: 0.7,
    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
});
