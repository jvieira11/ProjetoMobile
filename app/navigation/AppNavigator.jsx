import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen.jsx";
import FavoritesScreen from "../screens/FavoritesScreen.jsx";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Favorites") {
            iconName = "heart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#e63946",
        tabBarInactiveTintColor: "#555",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: "Favoritos" }}
      />
    </Tab.Navigator>
  );
}

// --------------------------------------
// Stack Principal
// --------------------------------------
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        {/* Tabs como tela inicial */}
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />

        {/* Tela de detalhes (abre por cima das tabs) */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Detalhes do Pokémon" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
