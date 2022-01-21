import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import Styles from "./styles";
import ModalCustom from "../../components/modal";
import { RollDice } from "../../components/skill";

const ListSkills = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [diceResult, setDiceResult] = useState(RollDice());

  const throwDice = () => {
    setDiceResult(RollDice);
    setModalVisible(true);
  };
  return (
    <View style={Styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <TouchableOpacity>
          <View style={Styles.card}>
            <Text style={Styles.title}>Kawarimi</Text>
            <TouchableOpacity onPress={throwDice}>
              <FontAwesome5 name="dice-six" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.card}>
            <Text style={Styles.title}>Chidori</Text>
            <TouchableOpacity onPress={throwDice}>
              <FontAwesome5 name="dice-six" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <ModalCustom
        handleClose={setModalVisible}
        show={modalVisible}
        diceValue={diceResult}
      />
    </View>
  );
};
export default ListSkills;
