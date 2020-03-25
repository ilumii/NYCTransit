import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen'
const INITIAL_ROUTE_NAME = 'Home';

export default function App() {

  function Home({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>her</Text>
        <Button
          title="Go to Wojciech's profile"
          onPress={() =>
            navigation.navigate("Home", { id: "Wojciech", age: 22 })
          }
        />
        <Button
          title="Go to unknown profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    );
  }

  function Profile({ route }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello {route.params?.id || "Unknown"}!</Text>
        <Text>
          Type of age parameter is{" "}
          {route.params?.age ? typeof route.params.age : "undefined"}
        </Text>
      </View>
    );
  }

  function Settings({ route, navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello {route.params?.id || "Unknown"}!</Text>
        <Text>
          Type of age parameter is{" "}
          {route.params?.age ? route.params.age : "undefined"}
        </Text>
      </View>
    );
  }

  const HomeStack = () => {
    const MyStack = createStackNavigator();

    return (
      <MyStack.Navigator>
        <MyStack.Screen name="Home" component={HomeScreen} />
        <MyStack.Screen name="Profile" component={Home} />
      </MyStack.Navigator>
    );
  };
  const MyTabs = createBottomTabNavigator();

  return (
    <MyTabs.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <MyTabs.Screen 
      name="HomeStack" 
      component={HomeStack} 
      options={{
        title: 'Get Started',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
      }}
      />
      <MyTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </MyTabs.Navigator>
  );
}
