import { Text, View, FlatList, ImageBackground, Image } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import Styles from "./styles";
import image from "../../../assets/AppBG.png";
import ModalCustom from "../../components/modal";
import { useNavigation } from "@react-navigation/native";
import { useJutsus } from "../../components/Context/jutsusContext";

const ListSkills = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tecnique, setTecnique] = useState({});
  const {jutsus} = useJutsus()

  const navigation = useNavigation();

  // useEffect(() => {
  //   AsyncStorage.getItem("jutsus").then((res) => {
  //     setJutsus(JSON.parse(res));
  //   });
  // }, []);
  // console.log(justus)
  function handlerGoToCreateSkills() {
    navigation.navigate("CreateSkills");
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
