import {
  Text,
  View,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import image from "../../../assets/AppBG.png";
import Styles from "./styles";
import { isEmpty } from "../../components/validate";
import showAlert from "../../components/alert";
import { useNavigation } from "@react-navigation/native";
import { useJutsus } from "../../components/Context/jutsusContext";

const CreateSkill = () => {
  const defaultImg = "https://media1.giphy.com/media/2y98KScHKeaQM/200.gif";

  const [name, setName] = useState("");
  const [url, setURL] = useState(defaultImg);
  const [atribute, setAtribute] = useState(0);
  const [numDice, setNumDice] = useState(1);
  const [bonus, setBonus] = useState(0);
  const {jutsus, loadJutsus} = useJutsus();
  const navigator = useNavigation()
  
  async function handleSave() {
    const jutsu = {
      name,
      image: url,
      atribute,
      numDice,
      bonus,
    };
    try {

      if (isEmpty(jutsu)) {
        await AsyncStorage.setItem('jutsus', JSON.stringify([...jutsus, jutsu]));
        loadJutsus();
        navigator.goBack();
      } else {
        showAlert("Alerta", "Ainda há campos vazios, por favor preencha todos");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ImageBackground source={image} style={Styles.image}>
      <View style={Styles.container}>
        <View style={Styles.inputContainer}>
          <View style={Styles.inputContainerItem}>
            <Text style={Styles.textInput}>Nome da técnica</Text>
            <TextInput onChangeText={setName} style={Styles.input} />
          </View>
          <View style={Styles.inputContainerItem}>
            <Text style={Styles.textInput}>Link imagem</Text>
            <TextInput onChangeText={setURL} style={Styles.input} />
          </View>
          <View style={Styles.inputContainerItem}>
            <Text style={Styles.textInput}>Atributo</Text>
            <TextInput
              onChangeText={setAtribute}
              keyboardType="number-pad"
              style={Styles.input}
            />
          </View>
          <View style={Styles.inputContainerItem}>
            <Text style={Styles.textInput}>Dados</Text>
            <TextInput
              onChangeText={setNumDice}
              keyboardType="number-pad"
              style={Styles.input}
            />
          </View>
          <View style={Styles.inputContainerItem}>
            <Text style={Styles.textInput}>Bonus</Text>
            <TextInput
              onChangeText={setBonus}
              keyboardType="number-pad"
              style={Styles.input}
            />
          </View>
          <Pressable onPress={handleSave} style={Styles.saveButton}>
            <Text style={Styles.textStyle}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};
export default CreateSkill;
