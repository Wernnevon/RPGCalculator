import { StyleSheet } from 'react-native';
import Fonts from '../../DesignPatterns/fonts';
import Colors from '../../DesignPatterns/colors';

const Styles = StyleSheet.create({
    centeredView: {
      display: 'flex',
      flex: 1,
      position: 'absolute',
      width:'100%',
      height: '110%',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0000004d",
    },
    modalView: {
      marginTop: -100,
      backgroundColor: Colors.Backgrounds.Primary,
      borderRadius: 10,
      padding: 55,
      alignItems: "center",
      shadowColor: "#000",
      width: 300,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginVertical: 15,
      fontSize: 25,
      textAlign: "center",
      fontFamily: Fonts.Primary.BOLD_ITALIC
    },
    button: {
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 7,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: Colors.Backgrounds.Close,
    },
    textStyle: {
      color: "white",
      fontSize: 16,
      textAlign: "center"
    },
    diceView:{
      flexDirection: 'row',
    },
    diceView:{
      display: 'flex',
      flexDirection: 'row',
    },
    diceContainer:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 1
    },
    singleDice:{
      fontSize: 50,
      marginHorizontal: 5,
      marginBottom: 20,
      fontFamily: Fonts.Primary.REGULAR,
      paddingHorizontal: 20,
      paddingVertical: 2,
      backgroundColor: Colors.Backgrounds.Secundary,
      color: Colors.Fonts.Secundary,
    },
    inputContainer:{
      display: 'flex',
      flexDirection: 'column',
      width: '120%',
      marginBottom: 20,
      marginTop: -10,
      paddingTop: 5
    },
    inputContainerItem: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: Colors.Backgrounds.Secundary
    },
    input:{
      backgroundColor: Colors.Backgrounds.Input,
      paddingHorizontal: 5,
      width: '50%',
      margin: 5,
      color: Colors.Fonts.Secundary,
      fontSize: 16,
    },
    textInput:{
      color: Colors.Fonts.Secundary,
      fontSize: 16,
    },
    rollButton: {
      padding:10,
      borderRadius: 10,
      backgroundColor: Colors.Backgrounds.Secundary,
      margin: 10,
      elevation: 4,
    },
    resultText:{
      fontSize: 50,
      marginHorizontal: 5,
      marginBottom: 20,
      fontFamily: Fonts.Primary.REGULAR,
      paddingHorizontal: 20,
      paddingVertical: 2,
      backgroundColor: Colors.Backgrounds.Secundary,
      color: Colors.Fonts.Secundary,
      textAlign: 'center',
    }
  });

export default Styles;