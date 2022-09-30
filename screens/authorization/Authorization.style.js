import styled from "styled-components/native";

export const AuthView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: 2px solid rgb(39, 86, 156);
  border-radius: 5px;
  width: 100%;
  height: 300px;
`;

export const AuthInput = styled.TextInput`
  border: ${(props) =>
    props.error ? "2px solid rgb(255, 102, 51)" : "2px solid rgb(39, 86, 156)"};
  background-color: rgb(219, 219, 219);
  padding: 2px;
  margin-top: 13px;
  border-radius: 5px;
  width: 150px;
`;

export const AuthHeaderText = styled.Text`
  font-size: 20px;
  color: rgb(39, 86, 156);
  font-weight: bold;
`;

export const LabelInput = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  padding-right: 15px;
  color: ${(props) => (props.error ? "rgb(255, 102, 51)" : "black")};
  text-decoration: ${(props) => (props.error ? "underline" : "none")};
`;

export const Container = styled.View`
  height: 80%;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 80%;
`;

export const AuthButton = styled.Text`
  margin-top: 20px;
  border: 1px solid rgb(228, 176, 98);
  background-color: rgb(228, 176, 98);
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 18px;
  width: 52%;
  align-self: center;
`;

export const AuthButtonView = styled.View`
  width: 100%;
`;

export const TabletView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const ErrorText = styled.Text`
  color: red;
  font-weight: bold;
`;
