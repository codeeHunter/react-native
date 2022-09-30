import React from "react";
import { ExitSvg } from "../svgIcons/Exit";
import { useAuth } from "../../hooks/useAuth";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./Header.style";
import { LogoApp } from "../svgIcons/LogoApp/LogoApp";

export const Header = () => {
  const { isAuth, setIsAuth } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    setIsAuth(false);
    navigation.navigate("Authorization");
  };

  return (
    <Container>
      <LogoApp />
      {isAuth && (
        <Pressable onPress={handleLogout}>
          <ExitSvg />
        </Pressable>
      )}
    </Container>
  );
};
