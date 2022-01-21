import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { View } from "react-native";

import Header from "./components/header/header";
import ListSkills from "./Pages/ListSkills";

const { Navigator, Screen } = createStackNavigator();

const Div = () => <View />;

export const Routes = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}>
      <Screen
        options={{
          headerShown: true,
          header: () => <Header title="Skills" showX={true} showArrow={true} />,
        }}
        name="ListSkills"
        component={ListSkills}
      />
      <Screen
        options={{
          headerShown: true,
          header: () => (
            <Header title="Criar Habilidades" showX={false} showArrow={false} />
          ),
        }}
        name="CreateSkills"
        component={Div}
      />
      <Screen
        options={{
          headerShown: true,
          header: () => (
            <Header
              title="Editar Habilidades"
              showX={false}
              showArrow={false}
            />
          ),
        }}
        name="EditSkills"
        component={Div}
      />
    </Navigator>
  </NavigationContainer>
);
