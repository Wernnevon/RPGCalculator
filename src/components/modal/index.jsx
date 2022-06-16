import { Modal, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../DesignPatterns/colors";

import { Play } from "../../components/skill";
import Styles from "./styles";

const ModalCustom = ({ show, handleClose, tecnica }) => {
  const [atribute, setAtribute] = useState(0);
  const [numDice, setNumDice] = useState(1);
  const [bonus, setBonus] = useState(0);
  const [total, setTotal] = useState();
  const [dices, setDices] = useState();

  const roll = () => {
    let { total, dices } = Play(
      parseInt(tecnica.atribute),
      parseInt(tecnica.numDice),
      parseInt(tecnica.bonus)
    );
    setTotal(total);
    setDices(dices);
  };

  const close = () => {
    setTotal(undefined);
    setDices(undefined);
    handleClose(!show);
    setAtribute(0);
    setNumDice(1);
    setBonus(0);
  };

  return (
    <View
      style={show ? Styles.centeredView : { display: "none" }}
      onTouchStart={close}
    >
      <Modal animationType="fade" transparent={true} visible={show}>
        <View style={Styles.centeredView}>
          <View
            style={Styles.modalView}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <Text style={Styles.modalText}>{tecnica.name}</Text>
            <Pressable style={Styles.rollButton} onPress={roll}>
              <FontAwesome5
                style={{ elevation: 2 }}
                name="dice"
                size={50}
                color={Colors.Backgrounds.White}
              />
            </Pressable>
            {total && tecnica.bonus>0 && (
              <View style={Styles.diceContainer}>
                <Text style={Styles.modalText}>Resultado</Text>
                <Text style={Styles.resultText}>{total}</Text>
              </View>
            )}
            {dices && (
              <View style={Styles.diceContainer}>
                <Text style={Styles.modalText}>Dados</Text>
                <View style={Styles.diceView}>
                  {dices.map((dice, index) => (
                    <Text key={index} style={Styles.singleDice}>
                      {dice}
                    </Text>
                  ))}
                </View>
              </View>
            )}
            <Pressable
              style={[Styles.button, Styles.buttonClose]}
              onPress={close}
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
