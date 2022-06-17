import { StyleSheet } from "react-native";
import Color from "../../DesignPatterns/colors";
import Fonts from "../../DesignPatterns/fonts";

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    height: "100%",
    width: "100%",
    paddingHorizontal: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingVertical: 10,
  },
  title: {
    color: Color.Fonts.Primary,
    fontSize: 20,
    textTransform: "uppercase",
    marginBottom: 10,
    fontFamily: Fonts.Primary.BOLD,
    textAlign: "center",
  },
  card: {
    backgroundColor: Color.Backgrounds.Primary,
    paddingVertical: 10,
    margin: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#ED7C03",
    borderRadius: 10,
    width: "47%",
    position: 'relative'
  },
  dice: {
    width: 32,
    height: 32,
    fontSize: 15,
    textAlign: "center",
    paddingTop: 5,
  },
  tecImage: {
    width: "90%",
    height: 120,
    resizeMode: "cover",
    borderColor: Color.Backgrounds.Primary,
    borderRadius: 20,
    borderWidth: 3,
  },
  buttonAddSkill: {
    display: "flex",
    borderWidth: 3,
    borderColor: "#007e0d",
    backgroundColor: Color.Backgrounds.Primary,
    justifyContent: "center",
    width: 56,
    borderRadius: 30,
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 99
  },
  removeButton:{
    borderWidth: 3,
    marginTop: 10,
    padding: 5,
    borderRadius: 50,
    borderColor: Color.Backgrounds.Close,
  }
});

export default Styles;
