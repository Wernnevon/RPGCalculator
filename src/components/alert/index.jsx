import { Alert } from "react-native";

const showAlert = (alertType, alertTetx) =>
Alert.alert(alertType, alertTetx, [
    { text: 'OK' },
  ]);
export default showAlert;