import { Text, View, FlatList, ImageBackground, Image } from "react-native";
import { useState } from "react";

import Styles from "./styles";
import image from "../../../assets/AppBG.png";
import ModalCustom from "../../components/modal";

const ListSkills = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tecnique, setTecnique] = useState('');
  
  const defaultImg = "https://media1.giphy.com/media/2y98KScHKeaQM/200.gif";
  const justus = [
    {
      jutsu: "Chidori",
      image:
        "https://c.tenor.com/foBQMZGu084AAAAC/chidori-sasuke.gif",
    },
    {
      jutsu: "Raikiri",
      image:
        "https://pa1.narvii.com/6776/4cb5a314f2646255d71930073c2a4323c8fe8e77_hq.gif",
    },
    {
      jutsu: "Hiraishin: Dorai",
      image:
        "https://c.tenor.com/c_QNsNVM270AAAAd/hiraishin.gif",
    },
    {
      jutsu: "Hiraishin: Kaminari no maisoo",
      image:
        "https://i.makeagif.com/media/11-14-2014/oZNxVG.gif",
    },
    {
      jutsu: "Hiraishin: Kiiroi arashi",
      image:
        "https://thumbs.gfycat.com/DentalBriefAnnelida-size_restricted.gif",
    },
    {
      jutsu: "Hiraishin: Tsuin rei no shūsoku",
      image:
        "https://static.wikia.nocookie.net/naruto/images/d/d3/Rekk%C5%AB_Tenk%C5%8D_Zank%C5%ABsen_Reishiki.PNG/revision/latest/scale-to-width-down/1000?cb=20170515230314&path-prefix=pt-br",
    },
    {
      jutsu: "Hiraishin: Kiro Hoshi",
      image:
      "https://thumbs.gfycat.com/DentalBriefAnnelida-size_restricted.gif",
    },
    {
      jutsu: "Zankuukyokuha",
      image: "https://static.wikia.nocookie.net/naruto/images/1/1e/Extremas_Ondas_de_Ar_Decapitadoras.png/revision/latest/scale-to-width-down/1000?cb=20151118195146&path-prefix=pt-br"
    },
    {
      jutsu: "Dynamic Entry",
      image: "https://c.tenor.com/2L3_4URf0IIAAAAC/dynamic-entry-gai-sensei.gif"
    },
    {
      jutsu: "Sou shou yume",
      image: "https://i.gifer.com/KoLR.gif"
    },
    {
      jutsu: "Shunppo",
      image: "https://static.wikia.nocookie.net/bleach/images/c/c3/Hoho.gif/revision/latest/scale-to-width-down/190?cb=20170730194927&path-prefix=pt-br"
    },
  ];
  const openModal = (jutsuName) => {
    setTecnique(jutsuName);
    setModalVisible(true);
  };
  function Card({ skill }) {
    return (
      <View onn style={Styles.card}>
        <Text style={Styles.title}>{skill.jutsu}</Text>
          <Image
            onTouchEnd={()=>openModal(skill.jutsu)}
            style={Styles.tecImage}
            source={{ uri: skill.image || defaultImg }}
          />
      </View>
    );
  }
  return (
    <ImageBackground source={image} style={Styles.image}>
      <View style={Styles.container}>
      <FlatList
        horizontal={false}
        columnWrapperStyle={Styles.list}
        numColumns={2}
        data={justus}
        renderItem={({item})=> <Card skill={item}/>}
        keyExtractor={item => item.jutsu}
      />
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
