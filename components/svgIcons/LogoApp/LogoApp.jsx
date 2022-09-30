import { Dimensions } from "react-native";
import { Logo, LogoText, LogoView } from "./LogoApp.style";

export const LogoApp = () => {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <LogoView>
      <Logo source={require("../../../assets/logoApp.png")} />
      {deviceWidth > 743 ? <LogoText>Каналсервис</LogoText> : ""}
    </LogoView>
  );
};
