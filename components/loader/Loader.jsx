import React from "react";
import LottieView from "lottie-react-native";
import { ContainerLoader, LoaderView } from "./Loader.style";

export const Loader = () => {
  return (
    <ContainerLoader>
      <LoaderView>
        <LottieView source={require("../../assets/cat.json")} autoPlay />
      </LoaderView>
    </ContainerLoader>
  );
};
