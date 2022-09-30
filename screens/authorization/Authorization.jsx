import React, { useEffect, useState } from "react";
import { Alert, Dimensions, Text, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { ErrorText } from "./Authorization.style";
import { Mobile } from "./Mobile";
import { Tablet } from "./Tablet";

export const Authorization = ({ navigation }) => {
  const deviceWidth = Dimensions.get("window").width;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, setIsAuth } = useAuth();
  const [error, setError] = useState(false);

  if (isAuth) {
    navigation.navigate("Post");
  }

  const handleAuth = () => {
    if (email === "Root" && password === "root") {
      setIsAuth(true);
      navigation.navigate("Post");
      setPassword("");
      setEmail("");
      setError(false);
    } else {
      setError(true);
      Alert.alert("Введены некорректные данные!");
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
          error={error}
        />
      ) : (
        <Mobile
          handleAuth={handleAuth}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          error={error}
        />
      )}
    </>
  );
};
