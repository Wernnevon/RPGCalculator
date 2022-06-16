import { Text, View, ImageBackground } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import HeaderStyles from "./style";
import Image from  '../../../assets/pergaminho-naruto.png'
import Color from '../../DesignPatterns/colors';

export default Header = ({ title, showX, showArrow }) => {
  const navigation = useNavigation();

  function handlerGoToAppHomepage() {
    navigation.navigate("ListSkills");
  }

  return (
    <View style={HeaderStyles.container}>
      <ImageBackground source={Image} style={HeaderStyles.image}>
      {showArrow ? (
        <BorderlessButton style={HeaderStyles.alignLeft} onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color={Color.Fonts.Primary}></Feather>
        </BorderlessButton>
      ) : (
        <View />
      )}
      <Text style={HeaderStyles.title}> {title} </Text>

      {showX ? (
        <BorderlessButton style={HeaderStyles.alignRight} onPress={handlerGoToAppHomepage}>
          <Feather name="x" size={24} color={Color.Fonts.Primary}></Feather>
        </BorderlessButton>
      ) : (
        <View />
      )}
    </ImageBackground>
    </View>
  );
};
