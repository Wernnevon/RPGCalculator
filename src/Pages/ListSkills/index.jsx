import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import Styles from "./styles";
import { RollDice } from "../../components/skill";

const ListSkills = () => {
  const [result, setResult] = useState(0);

  const skill = { name: "Chidori", qntDice: 2, F: 12, H: 17, bonus: 39 };

  return (
    <View style={Styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <TouchableOpacity>
          <View style={Styles.card}>
            <Text style={Styles.title}>Kawarimi</Text>
            {result == 0 ? (
              <View />
            ) : (
              <TouchableOpacity onPress={() => setResult(0)}>
                <Text style={Styles.dice}>{result}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => setResult(RollDice)}>
              <FontAwesome5 name="dice-six" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={Styles.card}>
            <Text style={Styles.title}>Chidori</Text>
            {result == 0 ? (
              <View />
            ) : (
              <TouchableOpacity onPress={() => setResult(0)}>
                <Text style={Styles.dice}>{result}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => setResult(RollDice)}>
              <FontAwesome5 name="dice-six" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default ListSkills;
