import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { Box, Button, HStack, Image, Row } from "native-base";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { useNavigate } from "react-router-native";

const { height } = Dimensions.get("window");

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <View style={styles.welcomeImg}>
        <Image
          source={require("../assets/images/welcome.png")}
          alt="welcome png"
          size="2xl"
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 60,
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            color: COLORS.primary,
          }}
        >
          Discover your dream Investment here!
        </Text>
        <Text
          style={{
            fontSize: SIZES.medium,
            textAlign: "center",
            paddingTop: 30,
          }}
        >
          Explore all the investment based on your interest and study major
        </Text>
      </View>
      <HStack space={15} justifyContent="center">
        <Button
          onPress={() => navigate("login")}
          paddingLeft={50}
          paddingRight={50}
        >
          Login
        </Button>
        <Button variant="unstyled" onPress={() => navigate("register")}>
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            Register
          </Text>
        </Button>
      </HStack>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeImg: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
});
export default Welcome;
