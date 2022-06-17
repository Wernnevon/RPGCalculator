import { Text, View, FlatList, ImageBackground, Image } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Styles from "./styles";
import image from "../../../assets/AppBG.png";
import ModalCustom from "../../components/modal";
import { useJutsus } from "../../components/Context/jutsusContext";
import Color from "../../DesignPatterns/colors";

const ListSkills = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tecnique, setTecnique] = useState({});
  const { jutsus, loadJutsus } = useJutsus();
  const navigation = useNavigation();

  function handlerGoToCreateSkills() {
    navigation.navigate("CreateSkills");
  }
  async function handleRemoveJutsu(jutsuName){
    let tec = jutsus.filter(jutsu => jutsu.name !== jutsuName);
    await AsyncStorage.setItem('jutsus', JSON.stringify(tec));
    loadJutsus();
  }
  const openModal = (jutsu) => {
    setTecnique(jutsu);
    setModalVisible(true);
  };
  function Card({ skill }) {
    return (
      <View style={Styles.card}>
        <Text style={Styles.title}>{skill.name}</Text>
        <Image
          onTouchEnd={() => openModal(skill)}
          style={Styles.tecImage}
          source={{ uri: skill.image }}
        />
        <TouchableOpacity style={Styles.removeButton} onPress={() => handleRemoveJutsu(skill.name)}>
          <AntDesign name="delete" size={24} color={Color.Backgrounds.Close} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ImageBackground source={image} style={Styles.image}>
      <View style={Styles.container}>
        <View style={Styles.buttonAddSkill}>
          <TouchableOpacity onPress={handlerGoToCreateSkills}>
            <AntDesign name="plus" size={50} color="#007e0d" />
          </TouchableOpacity>
        </View>
        {jutsus && (
          <FlatList
            horizontal={false}
            columnWrapperStyle={Styles.list}
            numColumns={2}
            data={jutsus}
            renderItem={({ item }) => <Card skill={item} />}
            keyExtractor={(item) => item.jutsu}
          />
        )}
      </View>
      <ModalCustom
        handleClose={setModalVisible}
        show={modalVisible}
        tecnica={tecnique}
      />
    </ImageBackground>
  );
};
export default ListSkills;
