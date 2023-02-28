import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { Button, Input, ScrollView, Stack, VStack } from "native-base";
import { useNavigate } from "react-router-native";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => navigate("/")}>
          <Text
            href="/"
            style={{
              textDecorationLine: "underline",
            }}
          >
            Back to home
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
          paddingVertical: 120,
          paddingHorizontal: 30,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.extraLarge,
              color: COLORS.primary,
            }}
          >
            Create Account
          </Text>
          <Text
            style={{
              fontSize: SIZES.large,
              paddingTop: 20,
              textAlign: "center",
            }}
          >
            Welcome to start the new opportunities with Sinwattana.
          </Text>
        </View>
        <VStack
          space={5}
          style={{
            paddingTop: 40,
            width: "100%",
          }}
        >
          <View>
            <Text
              style={{
                paddingBottom: 10,
                fontSize: SIZES.medium,
              }}
            >
              Username
            </Text>
            <Input type="text" size="md" placeholder="Username" />
          </View>
          <View>
            <Text
              style={{
                paddingBottom: 10,
                fontSize: SIZES.medium,
              }}
            >
              Email
            </Text>
            <Input type="email" size="md" placeholder="Username" />
          </View>
          <View>
            <Text
              style={{
                paddingBottom: 10,
                fontSize: SIZES.medium,
              }}
            >
              Password
            </Text>
            <Input type="password" size="md" placeholder="Password" />
          </View>
        </VStack>
        <View
          style={{
            paddingVertical: 20,
          }}
        >
          <Button size="md">Creat an account</Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate("/login")}>
            <Text
              style={{
                color: COLORS.primary,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Signup;
