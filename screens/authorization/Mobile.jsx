import React from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import {
  AuthButton,
  AuthButtonView,
  AuthHeaderText,
  AuthInput,
  AuthView,
  Container,
  LabelInput,
} from "./Authorization.style";

export const Mobile = ({
  email,
  setEmail,
  password,
  setPassword,
  handleAuth,
}) => {
  return (
    <Container>
      <AuthView>
        <View>
          <AuthHeaderText>Autorization</AuthHeaderText>
        </View>
        <SafeAreaView>
          <LabelInput>login</LabelInput>
          <AuthInput value={email} onChangeText={(email) => setEmail(email)} />
        </SafeAreaView>
        <SafeAreaView>
          <LabelInput>password</LabelInput>
          <AuthInput
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </SafeAreaView>
        <AuthButtonView>
          <Pressable onPress={handleAuth}>
            <AuthButton>Submit</AuthButton>
          </Pressable>
        </AuthButtonView>
      </AuthView>
    </Container>
  );
};
