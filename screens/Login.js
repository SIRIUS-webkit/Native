import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants/theme";
import { Button, Input, VStack, Link } from "native-base";
import { useNavigate } from "react-router-native";

const Login = () => {
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
      <View
        style={{
          paddingVertical: 150,
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
            Login here
          </Text>
          <Text
            style={{
              fontSize: SIZES.large,
              paddingTop: 20,
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
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
              Password
            </Text>
            <Input type="password" size="md" placeholder="Password" />
          </View>
        </VStack>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button size="sm" variant="link">
            Forgot your password?
          </Button>
        </View>
        <View
          style={{
            paddingVertical: 20,
          }}
        >
          <Button size="md">Sign In</Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigate("/register")}>
            <Text
              style={{
                color: COLORS.primary,
              }}
            >
              Join for Free
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
