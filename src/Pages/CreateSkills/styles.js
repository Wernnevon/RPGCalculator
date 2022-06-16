import { StyleSheet } from "react-native";
import Color from "../../DesignPatterns/colors";
import Fonts from "../../DesignPatterns/fonts";

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: 20,
    paddingTop: 5,
  },
  inputContainerItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Color.Backgrounds.Secundary,
    paddingVertical: 5
  },
  input: {
    backgroundColor: Color.Backgrounds.Input,
    paddingHorizontal: 5,
    width: "50%",
    margin: 5,
    color: Color.Fonts.Secundary,
    fontSize: 16,
  },
  textInput: {
    color: Color.Fonts.Secundary,
    fontSize: 16,
  },
  saveButton: {
    padding:10,
    borderRadius: 10,
    backgroundColor: Color.Backgrounds.Secundary,
    width: 150,
    alignSelf: "center",
    elevation: 4,
    marginTop: 20,
  },
  textStyle: {
    color: Color.Fonts.White,
    fontSize: 16,
    textAlign: "center"
  },
});

export default Styles;
