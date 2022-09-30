import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/header/Header";
import { Authorization } from "./authorization/Authorization";
import { Posts } from "./posts/Posts";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="Authorization"
          component={Authorization}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Post"
          component={Posts}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
