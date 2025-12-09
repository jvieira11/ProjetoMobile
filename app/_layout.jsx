import React from "react";
import FavoritesScreen from "./screens/FavoritesScreen";
import AppNavigator from "./navigation/AppNavigator";
import FavoritesProvider from "./context/FavoritesContext";

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <AppNavigator/>
    </FavoritesProvider>
  );
}
