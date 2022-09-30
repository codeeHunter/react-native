import { useState } from "react";
import { StatusBar } from "react-native";
import { AuthContext } from "./components/AuthContext";
import { Navigation } from "./screens/Navigation";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Navigation />
      <StatusBar style="auto" />
    </AuthContext.Provider>
  );
}
