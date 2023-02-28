import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  AppRegistry,
} from "react-native";

import { NativeRouter, Route, Link, Routes } from "react-router-native";
import { NativeBaseProvider } from "native-base";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <NativeRouter>
          <StatusBar animated={true} backgroundColor="#00a19b" />
          <SafeAreaView style={styles.container}>
            {/* <Navbar /> */}
            {/* <Home /> */}
            {/* <Welcome /> */}

            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              {/* <Route path="/topics" component={Topics} /> */}
            </Routes>
          </SafeAreaView>
        </NativeRouter>
      </NativeBaseProvider>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  // container: {
  // },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});

AppRegistry.registerComponent("MyApp", () => App);

export default App;
