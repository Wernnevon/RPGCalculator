import { Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import HeaderStyles from "./style";

export default Header = ({ title, showX = true, showArrow = true }) => {
  const navigation = useNavigation();

  function handlerGoToAppHomepage() {
    navigation.navigate("ListSkills");
  }

  return (
    <View style={HeaderStyles.container}>
      {showArrow ? (
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color="#15b6d6"></Feather>
        </BorderlessButton>
      ) : (
        <View />
      )}
      <Text style={HeaderStyles.title}> {title} </Text>

      {showX ? (
        <BorderlessButton onPress={handlerGoToAppHomepage}>
          <Feather name="x" size={24} color="#ff669d"></Feather>
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
};
