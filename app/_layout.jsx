import React, { useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import AppNavigator from "./navigation/AppNavigator";
import FavoritesProvider from "./context/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  return (
    <AuthProvider>
      <FavoritesProvider>
        {loading ? (
          <SplashScreen onFinish={() => setLoading(false)} />
        ) : (
          <AppNavigator />
        )}
      </FavoritesProvider>
    </AuthProvider>
  );
}
