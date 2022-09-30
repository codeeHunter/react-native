import React, { useState } from "react";
import { Alert, Dimensions, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Validation } from "../../components/validation/Validation";
import { useAuth } from "../../hooks/useAuth";
import {
  AuthButton,
  AuthButtonView,
  AuthHeaderText,
  AuthInput,
  AuthView,
  Container,
  LabelInput,
} from "./Authorization.style";
import { Mobile } from "./Mobile";
import { Tablet } from "./Tablet";

export const Authorization = ({ navigation }) => {
  const deviceWidth = Dimensions.get("window").width;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, setIsAuth } = useAuth();

  if (isAuth) {
    navigation.navigate("Post");
  }

  const handleAuth = () => {
    if (email === "Root" && password === "root") {
      setIsAuth(true);
      navigation.navigate("Post");
      setPassword("");
      setEmail("");
    } else {
      Alert.alert("Введенные данные некорректны!");
    }
  };

  return (
    <>
      {deviceWidth > 743 ? (
        <Tablet
          handleAuth={handleAuth}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <Mobile
          handleAuth={handleAuth}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
    </>
  );
};
