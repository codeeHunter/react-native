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
  error,
}) => {
  return (
    <Container>
      <AuthView>
        <View>
          <AuthHeaderText>Autorization</AuthHeaderText>
        </View>
        <SafeAreaView>
          <LabelInput error={error}>login</LabelInput>
          <AuthInput
            error={error}
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </SafeAreaView>
        <SafeAreaView>
          <LabelInput error={error}>password</LabelInput>
          <AuthInput
            error={error}
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
