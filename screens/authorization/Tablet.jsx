import React, { useEffect } from "react";
import { Pressable, View } from "react-native";
import {
  AuthButton,
  AuthButtonView,
  AuthHeaderText,
  AuthInput,
  AuthView,
  Container,
  ErrorText,
  LabelInput,
  TabletView,
} from "./Authorization.style";

export const Tablet = ({
  email,
  setEmail,
  password,
  setPassword,
  handleAuth,
  setError,
  error,
}) => {
  setError(false);
  return (
    <Container>
      <AuthView>
        <View>
          <AuthHeaderText>Autorization</AuthHeaderText>
        </View>
        <TabletView>
          <LabelInput>login</LabelInput>
          <AuthInput value={email} onChangeText={(email) => setEmail(email)} />
        </TabletView>
        <TabletView>
          <LabelInput>password</LabelInput>
          <AuthInput
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </TabletView>
        <AuthButtonView>
          <Pressable onPress={handleAuth}>
            <AuthButton>Submit</AuthButton>
          </Pressable>
        </AuthButtonView>
      </AuthView>
    </Container>
  );
};
