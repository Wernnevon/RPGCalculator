import { Modal, Text, Pressable, View } from "react-native";

import Styles from "./styles";

const ModalCustom = ({ show, handleClose, diceValue }) => {
  return (
    <View style={show ? Styles.centeredView : { display: "none" }}>
      <Modal animationType="fade" transparent={true} visible={show}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}>Resultado: {diceValue}</Text>
            <Pressable
              style={[Styles.button, Styles.buttonClose]}
              onPress={() => handleClose(!show)}
            >
              <Text style={Styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalCustom;
