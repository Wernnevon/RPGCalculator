import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    centeredView: {
      display: 'flex',
      flex: 1,
      position: 'absolute',
      width:'100%',
      height: '102%',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0000004d",
    },
    modalView: {
      marginTop: '-2%',
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 7,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#7d5aa3",
    },
    textStyle: {
      color: "white",
      fontSize: 16,
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default Styles;